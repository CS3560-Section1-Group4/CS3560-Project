import './App.css';
import React from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import ToDo from './containers/ToDo'
import Houses from './containers/Houses';
import Housemates from './containers/Housemates'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
    <Router>
      <div className = "App">
          <Switch>
            <Route path = "/login">
              <Login />
            </Route>   
            <Route path = "/signup">
              <SignUp />
            </Route>
            <Route path = "/todo">
              <ToDo />
            </Route>
            <Route path = "/houses">
              <Houses />
            </Route>
            <Route path = "/housemates">
              <Housemates />
            </Route>
          </Switch>
      </div>
    </Router>
    );
};

export default App;


/*function App() {
function App() {

  const[name, setName] = useState("");
  const[age, setAge] = useState(0);


  const [roommateList, setRoommateList] = useState([]);

  const addRoommate = () => {
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age,
    }).then(()=>{
      console.log("success")
    });
  }

  const getRoommates = () => {
    Axios.get("http:://localhost:3001/roommates").then((response) => {
      setRoommateList(response.data);
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

      HOW TO GET FROM DATABASE

      <div className="roommates">
        <button onClick={getRoommates}> Show Roommates</button>

        {rooommateList.map((val,key) => {
          return( 
            <div className="roommate">
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>
            </div>
          );
        })}
      </div>


    </div>
  );
}

export default App;*/
