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
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Login from './containers/Login';
import SignIn from './containers/SignIn';


const App = () => {
    return (
    <Router>
      <div className = "App">
          <Switch>
            <Route path = "/login">
              <Login />
            </Route>  
            <Route path = "/signin">
              <SignIn />
            </Route>
          </Switch>
      </div>
    </Router>
    );
};

export default App;
