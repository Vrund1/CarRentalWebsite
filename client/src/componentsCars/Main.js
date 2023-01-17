import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'



export default function Main() {
    const [carsList, setCarsList] = useState([]);

    const getCars = () => {
        Axios.get("http://localhost:3001/carslist").then((response) => {
            setCarsList(response.data);
        });
    };

    const [licensenum, setlicensenum] = useState(0)
    const [enddate, setenddate] = useState('')
    const [droploc, setdroploc] = useState('')
    const [insunum, setinsunum] = useState(0)

    const addBooking = (License_Plate) => {
        Axios.post("http://localhost:3001/addbooking", {
        licensenum: licensenum,
        enddate: enddate,
        droploc: droploc,
        licenseplate: License_Plate,
        insunum: insunum
        }).then(() => {
            alert("Please click Rent to rent this vehicle");
        });
    };

    const updateAvalia = (License_Plate) => {
        Axios.put("http://localhost:3001/updateavalia", {
            licenseplate: License_Plate
        }).then(() => {
            alert("Please Click Next for Payment");
        });
    };

    return (
        <main>
            <h1 className="main--title">Cars Available:</h1>
            <h4>Insurance #1 = $50, full coverage</h4>
            <h4>Insurance #2 = $23, half coverage</h4>
            <h4>Insurance #3 = $0, no coverage</h4>

            <button onClick={getCars}>View Cars</button>
                {carsList.map((val, key) => {
                    return <div className="cars">
                        <h3> License_Plate: {val.License_Plate}</h3>
                        <h3> Price($/day): {val.Price}</h3>
                        <h3> Company: {val.Brand}</h3>
                        <h3> Model: {val.Model}</h3>
                        <h3> Colour: {val.Colour}</h3>
                        <h3> Seats: {val.No_Seats}</h3>
                        <h3> Size: {val.Size}</h3>
                        <div>
                        </div>
                        <div>
                            <input type="text" placeholder = "License Number..."
                            onChange = {(event) => {setlicensenum(event.target.value)}}
                            />
                            <input type="text" placeholder = "End Date..."
                            onChange = {(event) => {setenddate(event.target.value)}}
                            />
                            <input type="text" placeholder = "Drop-Off Location..."
                            onChange = {(event) => {setdroploc(event.target.value)}}
                            />
                            <input type="text" placeholder = "Insurance Number..."
                            onChange = {(event) => {setinsunum(event.target.value)}}
                            />
                        </div>
                        <button onClick={()=> {addBooking(val.License_Plate)}}>Confirm Details</button>
                        <button onClick={()=> {updateAvalia(val.License_Plate)}}>Rent!</button>
                        <Link to="/payment"><input type="payment" value=" Continue to Payment"/></Link>
                    </div>;
                })}
        </main>
    );
}