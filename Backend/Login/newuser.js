const bodyParser=require("body-parser");
const express=require("express");
const app = express();
// const mongoose=require("mongoose");
const crypto = require('crypto');
const buyerdb= require('../models/buyer.js')
const sellerdb=require('../models/seller.js')
app.use(bodyParser.urlencoded({ extended: true }));



async function createdatabase(req, res) {
    async function hashPassword(pwd) {
        try {
            // create a new SHA-256 hash object
            const encoder = new TextEncoder();
            const data = encoder.encode(pwd);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    
            // convert the hash to a hexadecimal string
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
            return hashHex;
        } catch (error) {
            console.error('Error hashing password:', error);
            throw error;
        }
    }

   
    const x = req.body.username;
    const y = req.body.pwd;
    const z = req.body.repwd;
    const userType = req.body.userType; // New field for user type
    const pn=req.body.phoneNumber;
    const catalog = req.body.catalog;
    let dbcollection=buyerdb
    console.log(x + " " + y + " " + userType+" "+pn);
    // let s= await generateCustomId()
    console.log()
    if(y==z)
    {
        if(userType=='buyer')
        {
            dbcollection=buyerdb
            try {
                const hashedPassword = await hashPassword(y);
                
                const newUser = new dbcollection({
                    username: x,
                    password: hashedPassword,
                });
        
                await newUser.save();
                console.log('User created:', newUser);
            } catch (error) {
                console.error('Error creating user:', error);
            }
            res.send("User Created");
        }
        else if(userType=='seller')
        {
            dbcollection=sellerdb
            const namePrefix = x.substring(0, 2).toUpperCase();
            const phonePrefix = pn.substring(0, 2);
            const rint = (min, max) => Math.floor(Math.random() * (max - min) + min);
            const s_id=namePrefix+phonePrefix+((rint(1000,9999).toString()).substring(0, 2).toUpperCase());
            console.log("sid",s_id)
            try {
                const hashedPassword = await hashPassword(y);                
                const newUser = new dbcollection({
                    username: x,
                    password: hashedPassword,
                    phoneNumber: pn,
                    catalog:catalog,
                    sellerId:s_id
                });
        
                await newUser.save();
                console.log('User created:', newUser);
            } catch (error) {
                console.error('Error creating user:', error);
            }
        }
        res.send("Created Successfulle");
           
    } 
    else
    {
        res.send("Password Mismatched");
    }
}
module.exports = createdatabase;