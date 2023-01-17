import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./style.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./componentsLogin/Main"
import Cars from "./componentsCars/Main"
import Payment from "./componentsPayment/Main"
import Employee from "./componentsEmployeeMain/Main"
import AddCar from "./componentsAddCar/Main"
import EditCar from "./componentsEditCar/Main"
import BookingDetails from "./componentsBookingDetails/Main"
import UpdateMaintenance from "./componentsUpdateMaintenance/Main"
import ViewMaintenance from "./componentsViewMaintenance/Main"
import AddMaintenance from "./componentsAddMaintenance/Main"
import CustomerInfo from "./componentsCustomerInfo/Main"



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="cars" element={<Cars />} />
            <Route path="employee" element={<Employee />} />
            <Route path="payment" element={<Payment />} />
            <Route path="addCar" element={<AddCar />} />
            <Route path="editCar" element={<EditCar />} />
            <Route path="bookingDetails" element={<BookingDetails />} />
            <Route path="updateMaintenance" element={<UpdateMaintenance />} />
            <Route path="viewMaintenance" element={<ViewMaintenance />} />
            <Route path="addMaintenance" element={<AddMaintenance />} />
            <Route path="customerInfo" element={<CustomerInfo />} />
        </Routes>
    </BrowserRouter>

    , 
    document.getElementById("root"))