import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Text from "react"
import Axios from 'axios';
import "./Login.css";
import {BrowserRouter as Router,Route, Switch, Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const checkAccount = () => {
    Axios.post('http://localhost:3001/create', {
      email:email, 
      password:password,
    }).then(()=>{
      console.log("success")
    });
  }

  return (
    <div className="Login">
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
        <Button onClick={checkAccount} block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <div> </div>
        Don't have an account? 
        <Link to = "/signin">Click here</Link>
      </Form>
    </div>
  );
}