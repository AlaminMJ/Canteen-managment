import React from "react";
import { Button, Card, Row } from "react-bootstrap";

const ProductList = () => {
  return (
    <div className="container">
      <h1 className="display-4 text-primary text-center">product List</h1>
      <div className="row">
        <Row xs={1} md={3} className="g-4">
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://is2.ecplaza.com/ecplaza2/products/3/35/356/1419434306/4206120.jpg"
            />
            <Card.Body>
              <Card.Title>Soyabin Oil</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://smartbdltd.com/wp-content/uploads/2020/05/1-1.jpg"
            />
            <Card.Body>
              <Card.Title>Mosor Dal</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
          <Card className="col-md-4">
            <Card.Img
              variant="top"
              src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
            />
            <Card.Body>
              <Card.Title>Rice Minicate</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Edit</Button>
              <Button variant="danger" className="ms-2">
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default ProductList;
