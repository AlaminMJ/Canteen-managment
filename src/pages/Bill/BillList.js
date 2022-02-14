import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";
import DeleteModal from "../../components/Modal/DeleteModal";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const BillList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bills, setbills] = useState([]);
  const loadDate = async () => {
    try {
      const result = await axios("http://localhost:5000/api/bills");
      setbills(result.data);
      console.log(bills);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    loadDate();
  }, []);
  const deleteBill = async (id) => {
<<<<<<< HEAD
    try {
      await axios.delete(`/bills/${id}`);
      alert("successfull");
      loadDate();
    } catch (error) {
      alert(error.message);
=======
    if (window.confirm("Confirm Delete")) {
      try {
        await axios.delete(`/bills/${id}`);
        alert("successfull");
        loadDate();
      } catch (error) {
        alert(error.message);
      }
>>>>>>> 755884b3f40b462bf1e381f442f4f657b28add8a
    }
  };

  return (
    <div className="container">
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="display-4 text-primary text-center">Bill List</h1>

      <div>
        <MaterialTable
          className="mt-2"
          columns={[
            { title: "Date", field: "date" },
            { title: "Name", field: "name" },
            { title: "Total", field: "date" },

            {
              title: "Action",
              render: (rowData) => (
                <>
                  <Link to={`/bill/${rowData._id}`}>
                    <button className="btn btn-sm btn-primary">View</button>
                  </Link>

                  <Link to={`/updateshoe/${rowData._id}`}>
                    <button className="btn btn-sm btn-success ms-2">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => deleteBill(rowData._id)}
                  >
                    Delete
                  </button>
                </>
              ),
            },
          ]}
          data={[{ id: 100, name: "alamin", date: "10-08-22" }]}
          title="Bill List"
          options={{
            exportButton: true,
          }}
        />
      </div>
    </div>
  );
};

export default BillList;
