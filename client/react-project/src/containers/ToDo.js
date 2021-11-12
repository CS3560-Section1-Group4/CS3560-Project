import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormLabel from "react-bootstrap/FormLabel";

export default function ToDo(){
    
    
    function checkAccount(){
        // get account 
        // find houses associated to account 

    }

    function house(){
        var house = "hahaha"
        return house
    }
    var he = house()

    function checkHousemates(){
        var housemates = ["lan", "vincent", "abdul"]
        return housemates
    }

    var house2 = checkHousemates()

    function checkTasks(){
        for (let i = 0; i < house2.length; i ++){
            
        }

    }
    var text = "Hello"
    var task = "Clean the dishes"

    const array = ["lan", "vincent"]
    array.push("vincent")
    const data = {
        "1549969678424": "26.092242876805436"
    }
    const name = Object.keys(data)
    const tasks = Object.values(data)
    
    return (
        <div> 
            <label> ToDo List </label>
            <div>
            </div>
            {array.map(arr => (
               <Form.Check type="checkbox" label={arr} />
            ))}
            <FormLabel>{array[0]}</FormLabel>
        </div>
    );

}

