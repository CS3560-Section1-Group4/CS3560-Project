import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const createAccount = () => {
    Axios.post('http://localhost:3001/createaccount', {
      email:email, 
      password:password,
    }).then(()=>{
      console.log("success")
    });
  }

  return (
    <div className = "SignIn">

        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand>
                Room.me
            </Navbar.Brand>
        </Navbar>
        
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign In
        </Button>
        <div> </div>
        Already have an account? 
        <Link to = "/login">Click here</Link>
      </Form>
    </div>
  );
}