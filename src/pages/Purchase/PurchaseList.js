import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

const PurchaseList = () => {
  const [modalShow, setModalShow] = useState(false);

  const [shoes, setShoes] = useState([]);
  const loadDate = async () => {
    try {
      const result = await axios("http://localhost:5000/api/shoes");
      setShoes(result.data);
      console.log(shoes);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadDate();
  }, []);
  const deleteShoe = async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/shoes/${id}`
      );
      alert("successfull");
      loadDate();
    } catch (error) {
      alert(error.message);
      console.dir(error);
    }
  };
  return (
    <div className="container">
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="display-4 text-primary text-center">Purchase List</h1>
      <div>
        <Link to="/purchase" className="mb-4">
          <Button className="d-flex align-items-center ms-auto">
            Purchase
          </Button>
        </Link>
      </div>
      <MaterialTable
        className="mt-2"
        columns={[
          { title: "ID", field: "id" },
          { title: "Name", field: "name" },
          { title: "Date", field: "date" },

          {
            title: "action",
            render: (rowData) => (
              <>
                <Link to={`/updateshoe/${rowData._id}`}>
                  <button className="btn btn-sm btn-primary">Edit</button>
                </Link>

                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => deleteShoe(rowData._id)}
                >
                  Delete
                </button>
              </>
            )
          }
        ]}
        data={[]}
        title="Purchase List"
        options={{
          exportButton: true
        }}
      />
    </div>
  );
};

export default PurchaseList;
