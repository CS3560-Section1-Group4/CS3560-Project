import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cotainer, Row, Col, Button, Modal, Nav} from 'react-bootstrap'
import './Housemates.css';
import ReactRoundedImage from "react-rounded-image";
import Axios from 'axios';
import Form from "react-bootstrap/Form";
import { useHistory } from 'react-router-dom';

const photoPlaceholder = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

//Card Component
const Card = (props) => {
    const { 
        title, 
        body, 
        imageURL = photoPlaceholder
    } = props;

    return (
        <button className="card">
        <div>
            <div className="header">
                <ReactRoundedImage
                image={imageURL}
                roundedColor='white'
                imageHeight='100'
                imageWidth='100'
                />
                <h2 className="title">{title}</h2>
            </div>
            <div>{body}</div>
        </div>
        </button>
    );
}

export default function Housemates() {
    let history = useHistory();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [newHousemate, setNewHousemate] = useState("");
    const [housemates, setHousemates] = useState([]);

    function getHousemates(){
        Axios.get("http:://localhost:3001/getChores").then((response) => {
        setHousemates(response.data);
    });

    }

    function checkValid(){
        Axios.post('http://localhost:3001/checkLogin', {
        housemates:newHousemate, 
        }).then(()=>{
         console.log("success")
        });
        setShow(false);
    }

    function goTodo(){
        history.push("/todo");
    }

    function signOut(){
        //Sign out code for SQL
        history.push("/login");
    }

    function goHousemates(){
        history.push("/housemates");
    }
    
    return (
    <div>
    {/* NavBar */}
    <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand>
            Room.me
            
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link onClick={goTodo}>To-Do List</Nav.Link>
            <Nav.Link onClick={goHousemates}>Housemates</Nav.Link>
            <Nav.Link onClick={signOut}>Sign-Out</Nav.Link>
        </Nav>
    </Navbar>

    {/* House Header */}
    <h1 style={{marginLeft: '100px', marginTop: '10px'}}>
        Housemates
    </h1>
    
    <div className='center'>
    <Row className="g-4">
    {Array.from({ length: 3 }).map((_, idx) => (
        <Card onClick={console.log("some function")} title="Housemate"/>
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
          <Modal.Title>Add a Housemate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form.Control                
                    value={newHousemate}
                    onChange={(e) => setNewHousemate(e.target.value)}
                />
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={checkValid}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
}