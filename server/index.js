const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "react",
    host: "localhost",
    password: "reactpassword",
    database: "database",
});

//Adds account to database
app.post('/createAccount' , (req, res) => {
    const name = req.body.name;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;


    db.query('INSERT INTO account (name,emailAddress,password) VALUES (?,?,?)', [name,emailAddress,password], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                res.send("Values Inserted");
            }
        })
})

//Adds house to database
app.post('/createHouse' , (req, res) => {
    const name = req.body.name;
    const numberOfTenants = req.body.numberOfTenants;


    db.query('INSERT INTO house (name,numberOfTenants) VALUES (?,?)', [name,numberOfTenants], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                res.send("Values Inserted");
            }
        })
})

//Adds a new chore to database
app.post('/createChore' , (req, res) => {
    const title = req.body.title;
    const assignedTo = req.body.assignedTo;
    const completionStatus = req.body.completionStatus;


    db.query('INSERT INTO chores (title,assignedTo,completionStatus) VALUES (?,?,?)', [title,assignedTo,completionStatus], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                res.send("Values Inserted");
            }
        })
})



//returns all chores from the chores table in the database
app.get('/getChores', (req,res) => {
    db.query("SELECT * FROM chores", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

//returns all housemates from the housemates table in the database
app.get('/getHousemates', (req,res) => {
    db.query("SELECT * FROM housemates", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

//returns all houses from the houses table in the database
app.get('/getHouses', (req,res) => {
    db.query("SELECT * FROM houses", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.listen(3001, ()=> {
    console.log ("Server running")
})