import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { IoMdPaperPlane } from "react-icons/io";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div>
      <h1 className="display-4 text-primary text-center">Add Product</h1>
      {/* form */}
      <Form className=" w-75 mx-auto mt-5">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="Product Name" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Product code</Form.Label>
            <Form.Control type="number" placeholder="123" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Unit</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Kg</option>
              <option>Pices</option>
              <option>Litter</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="d-flex align-items-center"
        >
          Submit <IoMdPaperPlane size={22} className="ms-2" />
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
