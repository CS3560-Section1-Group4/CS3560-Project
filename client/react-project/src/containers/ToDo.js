import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import Axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import {Cotainer, Row, Col, Button, Modal, Nav} from 'react-bootstrap'
import "./ToDo.css";
import { useHistory } from 'react-router-dom';

export default function ToDo(){
    
    let history = useHistory();

    // create the variable and the set function
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newTask, setNewTask] = useState("");
    const [choreList, setChores] = useState([]);
    const assignedTo = 'danielle'
    const accountID = '103'
    
    const [housemates, setHousemates] = useState([]);
    function getHousemates(){
        Axios.get('http://localhost:3001/getHousemates').then((response) => {
            setHousemates(response.data);
        });
    }
  
    // get request to MySQL database 
    function getChores(){
        Axios.get("http://localhost:3001/getChores").then((response) => {
        setChores(response.data);
    });

    }

    const handleChange = (e) => {
       let isChecked = e.target.checked;
       Axios.post('http://localhost:3001/deleteChore', {
        choreID:2
      }).then(()=>{
        console.log("success")
      });
        // do whatever you want with isChecked value
    }

    function createTask(){
        Axios.post('http://localhost:3001/createChore', {
          title: newTask,
          assignedTo: assignedTo,
          completionStatus: 0,
          accountID: accountID,
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
    
    // substitute variable for format
    var numberOfTenants = 5
    const housemateTasks = ["Chore", "Chore"]
    var ex = "Chore"
    housemateTasks.push(ex)
    
    return (
        <div className = "ToDo"> 
            {/* the navigation bar */}
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
            {/* to-do label */}
            <label > 
                <span style={{'fontSize': '80px'}}>To-Do List</span> 
            </label>
            <div> </div>``
            {/* structure of fake data of the housemate with their chores */}
            <button onClick={getChores}> Show Chores</button>
                        {choreList.map((val,key) => {
                        return( 
                            <div className="roommate">
                            <Form>        
                            <div></div>
                            <div></div>
                            <label> <span style={{'fontSize': '40px'}}>{val.assignedTo}</span>  </label>            
                                <Form.Check size="lg" style={{'fontSize': '30px'}} type="checkbox" label={val.title} onChange={e => handleChange(e)}/>
                            </Form>
                            {/* <h3>Task: {val.task}</h3> */}
                        </div>
                        );
                    })}  
            {/* {Array.from({ length: numberOfTenants }).map((_, idx) => (
                <Form>        
                    <div></div>
                    <div></div>
                    <label> <span style={{'fontSize': '40px'}}>Housemate</span>  </label>
                        {housemateTasks.map(tasks => (                
                            <Form.Check size="lg" style={{'fontSize': '30px'}} type="checkbox" label={tasks} />))}
                </Form> ))} */}
            
            {/* Add Chore Button */}
            <div className="addButton">
                <Button onClick={handleShow} style={{width: '50px', height: '50px', borderRadius: '50px', backgroundColor: '#97D8C4', borderColor: '#97D8C4'}}>
                    +
                </Button>
            </div>
            {/* Modal Screen */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Chore</Modal.Title>
                </Modal.Header>
                {/* Add Chore Input */}
                <Modal.Body>
                <Form.Control                
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                </Modal.Body>
                {/* Assign to People */}
                <Modal.Body>
                    <button onClick={getHousemates}> Assign to</button>
                    {housemates.map((val,key) => {
                    return( 
                        <div className="roommate">
                        <Form.Check type="checkbox" label = {val.name}/> 
                        {/* <h3>HouseMate: {val.name}</h3> */}
                        {/* <h3><Form.Check type="checkbox" label = {val.task} /> </h3>
                        <h3>Task: {val.task}</h3> */}
                    </div>
                    );
                })} 
                    
                    {/* {Array.from({ length: numberOfTenants }).map((_, idx) => (
                        <Form.Check type="checkbox" label = {"HouseMate"} /> 
                    ))} */}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={createTask}>
                    Submit
                </Button>
                </Modal.Footer>
            </Modal>

            {/* How to set the get post json array to variables */}        
        </div>

    );

}

