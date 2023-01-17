import React from "react"
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import AddCar from "../componentsAddCar/Main"
import editCar from "../componentsEditCar/Main"
import bookingDetails from "../componentsBookingDetails/Main"
import updateMaintenance from "../componentsUpdateMaintenance/Main"
import viewMaintenance from "../componentsViewMaintenance/Main"


export default function Main() {
   let navigate = useNavigate()
    return (
        
        <main>
            <h1 className="main--title">Employee Home:</h1>
            <div className = "mainbutts">
            
                <button><Link to="/addCar">Add Car</Link></button> &nbsp;&nbsp;&nbsp;
                <button><Link to="/editCar">Edit Car</Link></button> &nbsp;&nbsp;&nbsp;
                <button><Link to="/bookingDetails">Booking Details</Link></button> &nbsp;&nbsp;&nbsp;
                <button><Link to="/updateMaintenance">Update Maintenance</Link></button> &nbsp;&nbsp;&nbsp;
                <button><Link to="/viewMaintenance">View Maintenance</Link></button> &nbsp;&nbsp;&nbsp;
                <button><Link to="/addMaintenance">Add Maintenance</Link></button> &nbsp;&nbsp;&nbsp;
            
            </div>

        </main>
    )
} 