import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import DeleteModal from "../../components/Modal/DeleteModal";

const PurchaseList = () => {
  const [modalShow, setModalShow] = useState(false);
  const curr = new Date();
  curr.setDate(curr.getDate());
  const today = curr.toISOString().substr(0, 10);
  return (
    <div className="container">
      <DeleteModal show={modalShow} onHide={() => setModalShow(false)} />
      <h1 className="display-4 text-primary text-center">Purchase List</h1>
      <div>
        <Form.Group className="col-3 ms-auto mb-3" controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" defaultValue={today} />
        </Form.Group>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>12-jan-2021</td>
              <td>Rice</td>
              <td>56</td>
              <td>10000</td>
              <td>Kg</td>
              <td>
                <Button size="sm">Edit</Button>
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
            <tr>
              <td>1</td>
              <td>12-jan-2021</td>
              <td>Rice</td>
              <td>56</td>
              <td>10000</td>
              <td>Kg</td>
              <td>
                <Button size="sm">Edit</Button>
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
            <tr>
              <td>1</td>
              <td>12-jan-2021</td>
              <td>Rice</td>
              <td>56</td>
              <td>10000</td>
              <td>Kg</td>
              <td>
                <Button size="sm">Edit</Button>
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
            <tr>
              <td>1</td>
              <td>12-jan-2021</td>
              <td>Rice</td>
              <td>56</td>
              <td>10000</td>
              <td>Kg</td>
              <td>
                <Button size="sm">Edit</Button>
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

export default PurchaseList;
