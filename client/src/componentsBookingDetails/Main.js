import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'

export default function BookingDetails() {
    const [bookingsList, setBookingsList] = useState([]);

    const getBookings = () => {
        Axios.get("http://localhost:3001/bookingslist").then((response) => {
            setBookingsList(response.data);
        });
    };
    const deleteBooking = (Reservation_no) => {
        Axios.delete(`http://localhost:3001/deletebooking/${Reservation_no}`)
    }

    return (
        <main>
            <h1 className="main--title">Employee: Booking Details</h1>
            <button onClick={getBookings}>View Bookings</button>
                {bookingsList.map((val, key) => {
                    return <div className="bookings">
                        <h3> Reservation_no: {val.Reservation_no}</h3>
                        <h3> Drop Off Location: {val.Location_Dropoff}</h3>
                        <h3> Customer License No: {val.License_no}</h3>
                        <h3> License Plate: {val.License_Plate}</h3>
                        <h3> Insurance Policy No: {val.Policy_num}</h3>
                        <div>
                            <button onClick={()=> {deleteBooking(val.Reservation_no)}}>Delete</button>
                        </div>
                    </div>;
                })}
                <Link to="/employee"><input type="Return Employee Home" value=" Return Employee Home" /></Link>
        </main>
    )
}