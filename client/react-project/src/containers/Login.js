import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';
import "./Login.css";
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export default function Login() {
  // create the variable and the set function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // validate the length
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // makes sure all the fields have input
  function handleSubmit(event) {
    event.preventDefault();
  }

  // post request to MySQL database 
  const checkAccount = () => {
    Axios.post('http://localhost:3001/checkLogin', {
      email:email, 
      password:password,
    }).then(()=>{
      console.log("success")
    });
  }

  return (
    <div className="Login">
      {/* the navigation bar */}
      <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
                Room.me
            </Navbar.Brand>
      </Navbar>
      <div className="centered">
        <h1 className="title">
          Login
        </h1>
      </div>
      {/* the form */}
      <Form onSubmit={handleSubmit}>
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
        {/* onClick action to check in the database */}
        <Button onClick={checkAccount} block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        {/* reroute to the signin page */}
        <div> </div>
        Don't have an account? 
        <Link to = "/signup">Click here</Link>
      </Form>
    </div>
  );
}