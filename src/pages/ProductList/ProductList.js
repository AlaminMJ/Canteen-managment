import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import "./ProductList.css";
const ProductList = () => {
  return (
    <div className="container px-4">
      <h1 className="display-4 text-primary text-center">product List</h1>
      <div>
        <Button className="d-flex align-items-center ms-auto">
          <AiOutlinePlus className="me-2" size={20} /> Add Product
        </Button>
      </div>

      <div className="product-list-container mt-4">
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://is2.ecplaza.com/ecplaza2/products/3/35/356/1419434306/4206120.jpg"
          />
          <Card.Body>
            <Card.Title>Soyabin Oil</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" className="ms-2" size="sm">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://smartbdltd.com/wp-content/uploads/2020/05/1-1.jpg"
          />
          <Card.Body>
            <Card.Title>Mosor Dal</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            className="product-list-img"
            src="https://thefinancialexpress.com.bd/uploads/1630856711.jpeg"
          />
          <Card.Body>
            <Card.Title>Rice Minicate</Card.Title>
            <Card.Text></Card.Text>
            <Button variant="primary" size="sm">
              Edit
            </Button>
            <Button variant="danger" size="sm" className="ms-2">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductList;
