import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Cotainer, Row, Col, Button, Modal} from 'react-bootstrap'
import './Housemates.css';
import ReactRoundedImage from "react-rounded-image";

const photoPlaceholder = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

const Card = (props) => {
    const { 
        title, 
        body, 
        imageURL = photoPlaceholder
    } = props;

    return (
        <div className="card">
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
    );
}

export default function Housemates() {
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
        Housemates
    </h1>
    
    <div className='center'>
    <Row className="g-4">
    {Array.from({ length: 15 }).map((_, idx) => (
        // <Card2 style={{width: '150rem', height: '10rem'}}>
        //     <ReactRoundedImage
        //     image={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
        //     roundedColor='white'
        //     imageHeight='100'
        //     imageWidth='100'
        //     />
        //     <Card2.Body style={{right:'100px'}}>
        //     <Card2.Title>Card title</Card2.Title>
        //     <Card2.Text>
        //         This is a longer card with supporting text below as a natural
        //         lead-in to additional content. This content is a little bit longer.
        //     </Card2.Text>
        //     <Button>
        //         Button
        //     </Button>
        //     </Card2.Body>
        // </Card2>
        <Card title="urmmom" body="The brown fox died on ur mom face."/>
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