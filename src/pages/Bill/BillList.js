import React, { useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import DeleteModal from "../../components/Modal/DeleteModal";

const BillList = () => {
  const [modalShow, setModalShow] = useState(false);
 
  return (
    <div className="container">
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="display-4 text-primary text-center">Bill List</h1>
      <div>
        <Form.Group className="col-3 ms-auto mb-3" controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead className="table-primary">
            <tr>
              <th>S.L</th>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-jan-2021</td>
              <td>Boiler</td>
              <td>10000</td>
              <td>
                <Button size="sm" variant="dark">
                  View
                </Button>
                <Button size="sm" className="ms-2">
                  Edit
                </Button>
                <Button variant="success" size="sm" className="ms-2">
                  Print
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
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BillList;
