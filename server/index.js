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
    const email = req.body.email;
    const password = req.body.password;

    db.query('INSERT INTO account (name,emailAddress,password) VALUES (?,?,?)', [name,email,password], 
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
    var accountID = [];
    var houseID = [];

    //Please don't touch this code, it works and I have no idea why
    db.query("SELECT accountID FROM account WHERE name=(?) ",[name], 
    (err,result) => {
        if (err) {
            console.log(err);
        } else{
            setValue(result);
        }
    });
    function setValue(value) {
        accountID = value[0].accountID;
        console.log(accountID);
        db.query('INSERT INTO house (accountID,name,numberOfTenants) VALUES (?,?,?)', [accountID,name,numberOfTenants], 
        (err,result) => {
            if (err){
                console.log(err);
            } else{
                console.log("setValue")
            }
        })

        db.query("SELECT houseID FROM house WHERE accountID=(?) ",[accountID], 
        (err,result) => {
            if (err) {
                console.log(err);
            } else{
                setHouseValue(result);
            }
        });

        function setHouseValue(value){
            houseID = value[0].houseID;
            console.log(houseID);
            db.query('INSERT INTO housemates (accountID,houseID) VALUES (?,?)', [accountID,houseID], 
            (err,result) => {
                if (err){
                    console.log(err);
                } else{
                    res.send("Values Inserted HouseValue");
                }
            })
        }
        
    }
})

//Adds a new chore to database
app.post('/createChore' , (req, res) => {
    const title = req.body.title;
    const assignedTo = req.body.assignedTo;
    const completionStatus = req.body.completionStatus;
    const accountID = req.body.accountID;
    db.query('INSERT INTO chore (title,assignedTo,completionStatus,accountID) VALUES (?,?,?,?)', [title,assignedTo,completionStatus,accountID], 
    (err,result) => {
        if (err){
            console.log(err);
        } else{
            res.send("Chores Inserted");
        }
    })
    
})

//checks if emailAddress and password of current user exists in the database
app.post('/checkLogin', (req,res) => {
    const emailAddress = req.body.email;
    const password = req.body.password;
    var accountID = [];
    db.query("SELECT accountID FROM account WHERE (emailAddress,password) = (?,?)",[emailAddress,password], 
    (err,result) => {
        if (err) {
            console.log(err);
            res.send("Invalid login");
        } else{
            setValue(result);
            res.send(accountID.toString());
            
        }
    });
    function setValue(value){
        accountID = value[0].accountID;
        console.log(accountID);
    }
});

//returns all chores from the chores table in the database
app.get('/getChores', (req,res) => {
    db.query("SELECT * FROM chore", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

//returns all housemates from the housemates table in the database
app.get('/getHousemates', (req,res) => {
    db.query("SELECT name,accountID from account", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
    });

});

//returns the names of all housemates
app.get('/getHousematesNames', (req,res) => {
    db.query("SELECT name FROM account", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});


//returns all houses from the houses table in the database
app.get('/getHouses', (req,res) => {
    db.query("SELECT * FROM house", (err,result) => {
        if (err) {
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

//deletes a chore
app.post('/deleteChore', (req,res) => {
    const choreID = req.body.choreID;
    db.query("DELETE FROM chore WHERE choreID = ?",[choreID], 
    (err,result) => {
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