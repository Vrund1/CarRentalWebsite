const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'vrund148',
    database: 'CARRENTAL'
});


app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM LOGIN WHERE Employee_ID = ? AND Passwords = ? ", [username, password], (err, result) => {
        if(err){
            console.log(err);
        } 
            if(result.length > 0)
            {
                res.send(result);
            }
            else{
                res.send({message: "Wrong Combination!"})
            }
        
    });
});

app.put('/updatemaint', (req, res) => {
    const licenseplate = req.body.licenseplate;
    const mileage = req.body.mileage;
    const service = req.body.service;
    const cost = req.body.cost;

    db.query("UPDATE MAINTENANCE SET Mileage = ?, Service_done = ?, Cost = ? WHERE License_Plate = ?", 
    [mileage, service, cost, licenseplate], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }); 
});

app.delete('/delete/:plate', (req,res) => {
    const plate = req.params.plate
    db.query("DELETE FROM CAR WHERE License_Plate = ?", plate, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}) 

app.delete('/deletebooking/:resnum', (req,res) => {
    const resnum = req.params.resnum
    db.query("DELETE FROM BOOKING_DETAIL WHERE Reservation_no = ?", resnum, (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}) 



app.post('/addcars', (req, res) => {
    const licenseplate = req.body.licenseplate;
    const price = req.body.price;
    const storeid = req.body.storeid;
    const damage = req.body.damage;
    const brand = req.body.brand;
    const model = req.body.model;
    const colour = req.body.colour;
    const size = req.body.size;
    const avalibility = req.body.avalibility;
    const seats = req.body.seats;

    db.query('INSERT INTO CAR2 (License_Plate, Price, Damage, Brand, Model, Colour, No_Seats, Size, Store_Id, Avaliability) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
    [licenseplate, price, damage, brand, model, colour, seats, size, storeid, avalibility], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted!");
        }
    });
});


app.post('/addcustomer', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const dob = req.body.dob;
    const licensenum = req.body.licensenum;
    const address = req.body.address;
    const email = req.body.email;
    const phone = req.body.phone;

    db.query('INSERT INTO CUSTOMER (License_no, Address, Email, Phone, Fname, Lname, DOB) VALUES (?, ?, ?, ?, ?, ?, ?)', 
    [licensenum, address, email, phone, firstname, lastname, dob], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted!");
        }
    });
});

app.post('/addpay', (req, res) => {
    const licensenum = req.body.licensenum;
    const namecard = req.body.namecard;
    const cardnum = req.body.cardnum;
    const cvv = req.body.cvv;
    const billing = req.body.billing;

    db.query('INSERT INTO PAYMENT (LicenseNo, Card_No, CVV, Name_on_card, Billing_Address) VALUES (?, ?, ?, ?, ?)', 
    [licensenum, cardnum, cvv, namecard, billing], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted!");
        }
    });
});


app.post('/addbooking', (req, res) => {
    const licensenum = req.body.licensenum;
    const enddate = req.body.enddate;
    const droploc = req.body.droploc;
    const licenseplate = req.body.licenseplate;
    const insunum = req.body.insunum;

    db.query('INSERT INTO BOOKING_DETAIL (Date_End, Location_Dropoff, License_no, License_Plate, Policy_num) VALUES (?, ?, ?, ?, ?)', 
    [enddate, droploc,licensenum, licenseplate, insunum], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted!");
        }
    });
});

app.put('/updateavalia', (req, res) => {
    const licenseplate = req.body.licenseplate
    db.query("UPDATE CAR SET Avaliability = 'no' WHERE License_Plate = ?", 
    [licenseplate], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }); 
});


app.post('/addmaint', (req, res) => {
    const licenseplate = req.body.licenseplate;
    const milege = req.body.milege;
    const service = req.body.service;
    const cost = req.body.cost;

    db.query('INSERT INTO MAINTENANCE (License_Plate, Mileage, Service_done, Cost) VALUES (?, ?, ?, ?)', 
    [licenseplate, milege, service,cost], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.send("Values inserted!");
        }
    });
});

app.get('/maintenance', (req, res) => {
    db.query("SELECT * FROM MAINTENANCE", (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.get('/carslist', (req, res) => {
    db.query("SELECT *FROM CARRENTAL.CAR WHERE Avaliability = 'yes'", (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.get('/empcarslist', (req, res) => {
    db.query("SELECT *FROM CARRENTAL.CAR", (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});

app.put('/updatedmg', (req, res) => {
    const damage = req.body.damage
    const licenseplate = req.body.licenseplate
    db.query("UPDATE CAR2 SET Damage = ? WHERE License_Plate = ?", 
    [damage, licenseplate], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }); 
});

app.put('/updateava', (req, res) => {
    const avaliability = req.body.avaliability
    const licenseplate = req.body.licenseplate
    db.query("UPDATE CAR2 SET Avaliability = ? WHERE License_Plate = ?", 
    [avaliability, licenseplate], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    }); 
});


app.get('/bookingslist', (req, res) => {
    db.query("SELECT * FROM BOOKING_DETAIL", (err, result) => {
        if (err){
            console.log(err);
        } else{
            res.send(result);
        }
    });
});


app.listen(3001, () => {
    console.log("yay your server is running on 3001");
});