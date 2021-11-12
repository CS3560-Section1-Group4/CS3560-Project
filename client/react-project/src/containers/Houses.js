import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row, Col, Button, Modal} from 'react-bootstrap'
import './Houses.css';

export default function House() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
    <div>
    {/* NavBar */}
    <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
            Room.me
        </Navbar.Brand>
    </Navbar>

    {/* House Header */}
    <h1 style={{marginLeft: '100px', marginTop: '10px'}}>
        Houses
    </h1>

    {/* Cards */}
    <div className="center">
    <Row className="g-4">
    {Array.from({ length: 15 }).map((_, idx) => (
        <Card style={{width: '150rem', height: '10rem'}}>
            <Card.Body style={{marginTop: '10px'}}>
            <Card.Title>House Name</Card.Title>
            <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <Button>
                Button
            </Button>
            </Card.Body>
        </Card>
    ))}
    </Row>
    </div>

    {/* Add Button */}
    <div className="addButton">
        <Button onClick={handleShow} style={{width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#97D8C4', borderColor: '#97D8C4'}}>
            +
        </Button>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a House</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Add input here
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}