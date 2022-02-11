import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoMdPaperPlane } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";

const UpdateShoe = () => {
  const [shoe, setShoe] = useState({});
  const { id } = useParams;
  const loadData = async () => {
    const result = await axios(`http://localhost:5000/api/shoes/${id}`);
    setShoe(result.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  const curr = new Date();
  curr.setDate(curr.getDate());
  const today = curr.toISOString().substr(0, 10);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const result = await axios.put("http://localhost:5000/api/shoes", data);
    console.log(result.data);
  };

  return (
    <div>
      <h1 className="display-4 text-primary text-center"> Update Shoe</h1>
      {/* form */}
      <div className="d-flex justify-content-between m-4">
        <div></div>
        <Link to="/shoelist" className="">
          <button className="btn btn-primary">Shoe list</button>
        </Link>
      </div>
      <Form className=" w-75 mx-auto mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} className="col-4" controlId="formGridState">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              defaultValue={today}
              {...register("date", { required: true })}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="texty"
              defaultValue={shoe.name}
              placeholder="Name"
              {...register("name", { required: true })}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Id</Form.Label>
            <Form.Control
              type="number"
              placeholder="id"
              defaultValue={shoe.id}
              {...register("id", { required: true })}
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

export default UpdateShoe;
