import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

const ShoeList = () => {
  const [modalShow, setModalShow] = useState(false);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios("http://localhost:5000/api/shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => alert(err.message));
  }, []);
  return (
    <div>
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className="m-4">
        <h1 className="text-center text-primary display-5">Shoe List</h1>
        <div className="d-flex justify-content-between">
          <div className="col-3">
            <div class="input-group mb-3 ">
              <input type="text" class="form-control" placeholder="id" />
              <button class="btn btn-primary" type="button" id="button-addon2">
                Serach
              </button>
            </div>
          </div>
          <Link to="/shoe">
            <Button>Add new</Button>
          </Link>
        </div>

        <Table striped bordered hover size="sm">
          <thead className="table-primary">
            <tr>
              <th>S.L</th>
              <th>Id</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {shoes.map((shoe, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{shoe.id}</td>
                  <td>{shoe.name}</td>
                  <td>{shoe.date}</td>
                  <td>
                    <Button size="sm" className="ms-2">
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => setModalShow(true)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShoeList;
