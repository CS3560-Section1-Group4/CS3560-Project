import './App.css';
import { useState } from "react";
import Axios from 'axios';

/*function App() {
function App() {

  const[name, setName] = useState("");
  const[age, setAge] = useState(0);

  const addRoommate = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age,
    }).then(()=>{
      console.log("success")
    });
  }

  return (
    <div className = "App">
      <div className = "information">
        <label>Name:</label>
        <input 
        type= "text" 
        onChange={(event) => {
          setName(event.target.value);
        }} 
        />
        <label>Age:</label>
        <input type= "number"         
          onChange={(event) => {
          setAge(event.target.value);
        }} />
        <button onClick={addRoommate}> Add Roommate</button>
      </div>
    </div>
  );
}

export default App;*/


import React from "react";
import {BrowserRouter as Router,Switch,Routes,Link} from "react-router-dom";

const Home = () => {
    return<div>
        <h1> Home </h1>
    </div>
}

const About = () => {
    return<div>
        <h1> About </h1>
    </div>
}

const App = () => {
    return (

    <div>
      <Routes to= "/">Home</Routes>
      <Routes to= "/">About</Routes>
    </div>
    );
};

export default App;


/*import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
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
          Login
        </Button>
      </Form>
    </div>
  );
}*/
