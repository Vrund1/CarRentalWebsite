import React from "react"
import {useState} from "react"
import Employee from "../componentsEmployeeMain/Main"
import Payment from "../componentsPayment/Main"
import AddCar from "../componentsAddCar/Main"
import Cars from "../componentsCars/Main"
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Axios from 'axios'



export default function Main() {

    const handleSubmit = (e) =>{
        <BrowserRouter>
        <Routes>
            <Route path="employee" element={<Employee />} />
         </Routes>
         </BrowserRouter>
    }
    const [username, setusername] = useState('') 
    const [password, setpassword] = useState('')

    const addLogin = () => {
        Axios.post("http://localhost:3001/login", {
        username: username,
        password: password
        }).then(() => {
            console.log("success");
        });
    };

    return (
        <main>
            <h1 className="main--title">Please input login credentials below:</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    EmployeeId:
                    <input type="text" name="name" 
                        required
                        value = {username}
                        onChange = {(event) => {setusername(event.target.value)}}
                    />
                </label>
                <label>
                    Password: 
                    <input type="text" name="name" 
                    required
                    value = {password}
                    onChange = {(event) => {setpassword(event.target.value)}}
                    />
                </label>
                <Link to="/employee"><input type="submit" value="Submit" /></Link>
            </form>
        </main>
    )
}