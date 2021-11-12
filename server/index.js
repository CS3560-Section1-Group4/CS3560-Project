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
    const telephone = req.body.telephone;


    db.query('INSERT INTO account (name,emailAddress,telephone) VALUES (?,?,?)', [name,emailAddress,telephone], 
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

//Adds house to database
app.post('/createChore' , (req, res) => {
    const title = req.body.title;
    const assignedTo = req.body.assignedTo;
    const dateAssigned = req.body.dateAssigned;
    const completionStatus = req.body.completionStatus;
    const priority = req.body.priority;
    const choreStatus = req.body.choreStatus;


    db.query('INSERT INTO choresmanagement (title,assignedTo,dateAssigned,completionStatus) VALUES (?,?,?,?)', [title,assignedTo,dateAssigned,completionStatus], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                db.query('INSERT INTO chore (priority,choreStatus) VALUES (?,?)',[priority,choreStatus],
                (err,result) => {
                    if (err){
                        console.log(err);
                    } else{
                        res.send("Values Inserted");
                    }
                })
                res.send("Values Inserted");
            }
        })
})

app.listen(3001, ()=> {
    console.log ("Server running")
})