import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

export default function AddCar() {
    const [licenseplate, setlicenseplate] = useState('')
    const [price, setprice] = useState(0)
    const [storeid, setstoreid] = useState(0)
    const [damage, setdamage] = useState('')
    const [brand, setbrand] = useState('')
    const [model, setmodel] = useState('')
    const [colour, setcolour] = useState('')
    const [size, setsize] = useState('')
    const [avalibility, setavalibility] = useState('')
    const [seats, setseats] = useState(0)

    const addCars = () => {
        Axios.post("http://localhost:3001/addcars", {
        licenseplate: licenseplate,
        price: price,
        storeid: storeid,
        damage: damage,
        brand: brand,
        model: model,
        colour: colour,
        size: size,
        avalibility: avalibility,
        seats: seats
        }).then(() => {
            alert("done!");
        });
    };



    return (
        <main>
             <h1 className="main--title">Employee: Add Cars</h1>
             <form className = "main--form">
                 <label>
                     License Plate:
                     <input type="text" name="License Plate" 
                     onChange = {(event) => {setlicenseplate(event.target.value)}}
                     />
                 </label>
                 <label>
                     Price:
                     <input type="text" name="Price"
                     onChange = {(event) => {setprice(event.target.value)}}
                      />
                 </label>
                 <label>
                     Store ID: 
                     <input type="text" name="Store ID"
                     onChange = {(event) => {setstoreid(event.target.value)}}
                      />
                 </label>
                 <label>
                    Damage: 
                     <input type="text" name="Damage" 
                     onChange = {(event) => {setdamage(event.target.value)}}
                     />
                 </label>
                <label>
                     Brand: 
                     <input type="text" name="Brand" 
                     onChange = {(event) => {setbrand(event.target.value)}}
                     />
                 </label>
                 <label>
                    Model: 
                     <input type="text" name="Model" 
                     onChange = {(event) => {setmodel(event.target.value)}}/>
                 </label>
                 <label>
                    Colour: 
                     <input type="text" name="Colour" 
                     onChange = {(event) => {setcolour(event.target.value)}}
                     />
                 </label>
                 <label>
                    Size: 
                     <input type="text" name="Size"
                     onChange = {(event) => {setsize(event.target.value)}}
                    />
                 </label>
                 <label>
                    Avalibility(yes/no): 
                     <input type="text" name="Avalibility" 
                     onChange = {(event) => {setavalibility(event.target.value)}}
                     />
                 </label>   
                <label>
                    Number of Seats: 
                     <input type="text" name="Number of Seats" 
                     onChange = {(event) => {setseats(event.target.value)}}/>
                 </label>                  
                 <button onClick = {addCars}> Add Car</button>
                 </form>
                 <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
         </main>
     )
}