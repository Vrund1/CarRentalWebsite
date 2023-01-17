import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

export default function Main() {
    const [mainList, setMainList] = useState([]);

    const getMain = () => {
        Axios.get("http://localhost:3001/maintenance").then((response) => {
            setMainList(response.data);
        });
    };

    return (
        <main>
            <h1 className="main--title">Employee: View Maintenance</h1>
                <button onClick={getMain}>View</button>
                {mainList.map((val, key) => {
                    return <div className="maint">
                        <h3> License_Plate: {val.License_Plate}</h3>
                        <h3> Mileage: {val.Mileage}</h3>
                        <h3> Last Service: {val.Service_done}</h3>
                        <h3> Cost: {val.Cost}</h3>
                    </div>;
                })}
                <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
        </main>
    );
}

