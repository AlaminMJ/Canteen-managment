import React, { useState, useEffect } from "react";
import axios from "axios";

import { Form, Row, Col, Button } from "react-bootstrap";
import { IoMdPaperPlane } from "react-icons/io";
import "./AddProduct.css";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCode, setProductCode] = useState("");
  const [unit, setunit] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    console.log(image);
  }, []);
  const submitFrom = (e) => {
    e.preventDefault();
    const formData = { productName, productCode, unit };
    // formData.append("productName", productName);
    // formData.append("productCode", productCode);
    // formData.append("unite", unit);
    // formData.append("image", image, image.name);
    axios({
      method: "post",
      url: "http://localhost:5000/api/productlists",
      data: formData,
      // headers: { "content-type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <div>
      <h1 className="display-4 text-primary text-center">Add Product</h1>
      {/* form */}
      <Form className=" w-75 mx-auto mt-5" onSubmit={submitFrom}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Product code</Form.Label>
            <Form.Control
              type="number"
              placeholder="123"
              onChange={(e) => setProductCode(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Unit</Form.Label>
            <Form.Select
              defaultValue="Choose..."
              onChange={(e) => setunit(e.target.value)}
            >
              <option>Kg</option>
              <option>Pices</option>
              <option>Litter</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
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
