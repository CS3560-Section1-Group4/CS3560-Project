import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import Axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import {Cotainer, Row, Col, Button, Modal} from 'react-bootstrap'
import "./ToDo.css";

export default function ToDo(){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newTask, setNewTask] = useState("");
    
    function checkAccount(){
        // get account 
        // find houses associated to account 

    }

    
    var numberOfTenants = 5

    const housemateTasks = ["Chore", "Chore"]
    var task = "Chore"
    housemateTasks.push(task)
    
    /*const data = {
        "1549969678424": "26.092242876805436"
    }
    const name = Object.keys(data)
    const tasks = Object.values(data)*/
    
    return (
        <div className = "ToDo"> 
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    Room.me
                </Navbar.Brand>
            </Navbar>
            <label > 
                <span style={{'fontSize': '80px'}}>To-Do List</span> 
            </label>
            <div> </div>
            <label> <span style={{'fontSize': '40px'}}>House Name</span>  </label>
            {Array.from({ length: numberOfTenants }).map((_, idx) => (
                <Form>        
                    <div></div>
                    <div></div>
                    <label> <span style={{'fontSize': '40px'}}>Housemate</span>  </label>
                        {housemateTasks.map(tasks => (                
                            <Form.Check size="lg" style={{'fontSize': '30px'}} type="checkbox" label={tasks} />))}
                </Form> ))}
            
            <div className="addButton">
                <Button onClick={handleShow} style={{width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#97D8C4', borderColor: '#97D8C4'}}>
                    +
                </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Chore</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Control                
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                </Modal.Body>
                <Modal.Body>
                    Assign to
                    {Array.from({ length: numberOfTenants }).map((_, idx) => (
                        <Form.Check type="checkbox" label = {"HouseMate"} /> 
                    ))}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>
          
        </div>
        




    );

}

