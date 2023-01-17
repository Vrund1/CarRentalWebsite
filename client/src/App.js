import React from "react"
import NavbarLogin from "./componentsLogin/Navbar"
import Login from "./componentsLogin/Main"
import NavbarCars from "./componentsWelcome/Navbar"
import Welcome from "./componentsWelcome/Main"
import NavbarPayment from "./componentsPayment/Navbar"
import Payment from "./componentsPayment/Main"
import Cars from "./componentsCars/Main"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";


export default function App() {
    return (
        <div className="container">
            <Welcome />
            <ul>
                <button className="loginButt"><Link to="/login">Login</Link></button>
                <button className="carButt"><Link to="/customerInfo">Cars</Link></button>
            </ul>
        </div>
    )
}