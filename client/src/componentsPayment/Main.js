
import React from "react"
import {useState} from "react"
import Axios from 'axios'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

 export default function Payment() {

    const [licensenum, setlicensenum] = useState(0)
    const [namecard, setnamecard] = useState('')
    const [cardnum, setcardnum] = useState(0)
    const [cvv, setcvv] = useState(0)
    const [billing, setbilling] = useState('')

    const addPay = () => {
        Axios.post("http://localhost:3001/addpay", {
        licensenum: licensenum,
        namecard: namecard,
        cardnum: cardnum,
        cvv: cvv,
        billing: billing,
        }).then(() => {
            alert("Thank You!");
        });
    };

    return (
         <main>
             <h1 className="main--title">Please Provide Payment Info:</h1>
             <form className = "main--form">
                 <label>
                     License Number:
                     <input type="text" name="License Number" 
                     onChange = {(event) => {setlicensenum(event.target.value)}}
                     />
                 </label>
                 <label>
                     Name On Card: 
                     <input type="text" name="Name on Card" 
                     onChange = {(event) => {setnamecard(event.target.value)}}
                     />
                 </label>
                <label>
                     Card Number: 
                     <input type="text" name="Card Number" 
                     onChange = {(event) => {setcardnum(event.target.value)}}
                     />
                 </label>

                <label>
                     CVV: 
                     <input type="text" name="CVV" 
                     onChange = {(event) => {setcvv(event.target.value)}}
                     />
                 </label>
                <label>
                     Billing Address: 
                     <input type="text" name="Billing Address" 
                     onChange = {(event) => {setbilling(event.target.value)}}
                     />
                 </label>
             </form>
                <button onClick={addPay}>Submit</button>
                <button><Link to="/">Home</Link></button>
         </main>
     )
 } 
