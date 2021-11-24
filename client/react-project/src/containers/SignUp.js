import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { useHistory } from "react-router-dom";


import "./SignUp.css";

export default function SignUp() {
  // create the variable and the set function
  let history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // validate the length
  function validateForm() {
    return email.length > 0 && password.length > 0 && name.length > 0 ;
  }

  // makes sure all the fields have input
  function handleSubmit(event) {
    event.preventDefault();

    // post request to MySQL database 
      Axios.post('http://localhost:3001/createAccount', {
        name: name,  
        email:email, 
        password:password
      }).then(()=>{
        console.log("success")
      });

      history.push('/housemates')


  }

  return (
    <div className = "SignUp">
        {/* the navigation bar */}
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
                Room.me
            </Navbar.Brand>
        </Navbar>
        <div className="centered">
        <h1>
          Sign Up
        </h1>
      </div>
       {/* the form */} 
      <Form onSubmit={handleSubmit}>
      {/* the name input */}
      <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        {/* the email input */}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group> 
        {/* the password input */}       
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* click on the Button action */}
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
        <div> </div>
        {/* reroute to the signin page */}
        Already have an account? 
        <Link to = "/login">Click here</Link>
      </Form>
    </div>
  );
}