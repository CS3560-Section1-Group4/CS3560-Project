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
    database: "roommatesystem",
});


app.post('/create' , (req, res) => {
    const name = req.body.name;
    const age = req.body.age;


    db.query('INSERT INTO roommates (name,age) VALUES (?,?)', [name,age], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                res.send("Values Inserted");
            }
        })
})

app.listen(3001, ()=> {
    console.log ("Server running")
})