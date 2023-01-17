import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'


export default function Main() {
    const [newmileage, setnewmileage] = useState(0)
    const [licenseplate, setplate] = useState('')
    const [newservice, setnewserivce] = useState('')
    const [newcost, setnewcost] = useState(0)

    const updatemaint = () => {
        Axios.put("http://localhost:3001/updatemaint", {mileage: newmileage, service: newservice, cost: newcost, licenseplate: licenseplate}).then((response) => {
            alert("updated");
        });
    };
    
    return (
        <main>
             <h1 className="main--title">Employee: Update Car Maintenance</h1>
             <form className = "main--form">
                 <label>
                     License Plate:
                     <input type="text" name="License Plate" 
                     onChange = {(event) => {setplate(event.target.value)}}
                     />
                 </label>
                 <label>
                     Mileage: 
                     <input type="text" name="Mileage" 
                     onChange = {(event) => {setnewmileage(event.target.value)}}
                     />
                 </label>
                <label>
                     Service Done: 
                     <input type="text" name="Service Done" 
                     onChange = {(event) => {setnewserivce(event.target.value)}}
                     />
                 </label>

                <label>
                     Cost: 
                     <input type="text" name="Cost" 
                     onChange = {(event) => {setnewcost(event.target.value)}}
                     />
                 </label>

                 <button onClick = {updatemaint}>Update</button>
                 
                 </form>
                 <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
         </main>
    )
}