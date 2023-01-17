import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

export default function EditCar() {
    const [empcarsList, setEmpCarsList] = useState([]);

    const getEmpCars = () => {
        Axios.get("http://localhost:3001/empcarslist").then((response) => {
            setEmpCarsList(response.data);
        });
    };

    const [newdmg, setnewdmg] = useState('')
    const updatedamage = (License_Plate) => {
        Axios.put("http://localhost:3001/updatedmg", {damage: newdmg, licenseplate: License_Plate}).then(
            (response) => {
            alert("done!");
        });
    };

    const [newava, setnewava] = useState('')
    const updateava = (License_Plate) => {
        Axios.put("http://localhost:3001/updateava", {avaliability: newava, licenseplate: License_Plate}).then(
            (response) => {
            alert("done!");
        });
    };

    const deletecar = (License_Plate) => {
        Axios.delete(`http://localhost:3001/delete/${License_Plate}`)
    }

    return (
        <main>
            <h1 className="main--title">Employee: Car Information</h1>
            <button onClick={getEmpCars}>View Cars</button>
                {empcarsList.map((val, key) => {
                    return <div className="empcars">
                        <div>
                        <h3> License_Plate: {val.License_Plate}</h3>
                        <h3> Damages: {val.Damage}</h3>
                        <h3> Price: {val.Price}</h3>
                        <h3> Company: {val.Brand}</h3>
                        <h3> Model: {val.Model}</h3>
                        <h3> Colour: {val.Colour}</h3>
                        <h3> Number of Seats: {val.No_Seats}</h3>
                        <h3> Size: {val.Size}</h3>
                        <h3> Store Id: {val.Store_Id}</h3>
                        <h3> Avaliability: {val.Avaliability}</h3>
                        </div>
                        <div className = "dmgbutton">
                            <input type="text" placeholder = "Damages..."
                            onChange = {(event) => {setnewdmg(event.target.value)}}
                            />
                            <button onClick={()=> {updatedamage(val.License_Plate)}}>Update Damage</button>
                            <input type="text" placeholder = "yes/no"
                            onChange = {(event) => {setnewava(event.target.value)}}
                            />
                            <button onClick={()=> {updateava(val.License_Plate)}}>Update Avaliability</button>
                        </div>
                        <div className = "deletebutton">
                            <button onClick={()=> {deletecar(val.License_Plate)}}>Delete</button>
                        </div>
                    </div>;
                })}
                <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
        </main>
    )
}