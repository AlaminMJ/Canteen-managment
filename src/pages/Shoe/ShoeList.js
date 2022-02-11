import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

const ShoeList = () => {
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
    <div>
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="m-4">
        <h1 className="text-center text-primary display-5">Shoe List</h1>
        <div className="d-flex justify-content-between">
          <div className="col-3 mb-2"></div>
          <Link to="/shoe">
            <Button className="mb-2">Add new</Button>
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
                    <button className="btn btn-primary">Edit</button>
                  </Link>

                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => deleteShoe(rowData._id)}
                  >
                    Delete
                  </button>
                </>
              ),
            },
          ]}
          data={shoes}
          title="Demo Title"
        />
      </div>
    </div>
  );
};

export default ShoeList;
