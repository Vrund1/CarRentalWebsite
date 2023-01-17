import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

export default function AddCar() {
    const [licenseplate, setlicenseplate] = useState('')
    const [milege, setmilege] = useState(0)
    const [service, setservice] = useState('')
    const [cost, setcost] = useState(0)

    const addmaint = () => {
        Axios.post("http://localhost:3001/addmaint", {
        licenseplate: licenseplate,
        milege: milege,
        service: service,
        cost: cost,
        }).then(() => {
            alert("done!");
        });
    };


    return (
        <main>
             <h1 className="main--title">Employee: Add Maintenance</h1>
             <form className = "main--form">
                 <label>
                     License Plate:
                     <input type="text" name="License Plate" 
                     onChange = {(event) => {setlicenseplate(event.target.value)}}
                     />
                 </label>
                 <label>
                     Mileage:
                     <input type="text" name="Mileage"
                     onChange = {(event) => {setmilege(event.target.value)}}
                      />
                 </label>
                 <label>
                     Last Service: 
                     <input type="text" name="Last Service"
                     onChange = {(event) => {setservice(event.target.value)}}
                      />
                 </label>
                 <label>
                    Cost: 
                     <input type="text" name="Cost" 
                     onChange = {(event) => {setcost(event.target.value)}}
                     />
                 </label>                 
                 <button onClick = {addmaint}>Add Maintenance</button>
                 </form>
                 <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
         </main>
     )
}