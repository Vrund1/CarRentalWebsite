import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Axios from 'axios'
import {useState} from "react"




 export default function CustomerInfo() {

    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [dob, setdob] = useState('')
    const [licensenum, setlicensenum] = useState(0)
    const [address, setaddress] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

    const addCustomer = () => {
        Axios.post("http://localhost:3001/addcustomer", {
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        licensenum: licensenum,
        address: address,
        email: email,
        phone: phone
        }).then(() => {
            alert("Thank You!");
        });
    };


    return (
         <main>
             <h3 className="main--title">Please input your information below:</h3>
              <form className = "main--form">
                <label>
                     First Name:
                     <input type="text" name="First Name" 
                     onChange = {(event) => {setfirstname(event.target.value)}}
                     />
                 </label>
                <label>
                     Last Name:
                     <input type="text" name="Last Name" 
                     onChange = {(event) => {setlastname(event.target.value)}}
                     />
                 </label>
                 <label>
                     DOB:
                     <input type="text" name="DOB" 
                     onChange = {(event) => {setdob(event.target.value)}}
                     />
                 </label>
                 <label>
                     License Number:
                     <input type="text" name="License Number" 
                     onChange = {(event) => {setlicensenum(event.target.value)}}/>
                 </label>
                <label>
                     Address:
                     <input type="text" name="Address" 
                     onChange = {(event) => {setaddress(event.target.value)}}
                     />
                 </label>
                <label>
                     Email:
                     <input type="text" name="Email" 
                     onChange = {(event) => {setemail(event.target.value)}}/>
                 </label>
                <label>
                     Phone:
                     <input type="text" name="Phone" 
                     onChange = {(event) => {setphone(event.target.value)}}
                     />
                 </label>
                 <button onClick = {addCustomer}>Submit</button>
                 </form>
                <button><Link to="/cars">View Cars</Link></button>
         </main>
     )
 } 