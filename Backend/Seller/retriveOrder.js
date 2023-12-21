// Retrive the Orders recieved for a Seller

const mongoose = require('mongoose');

const {database} = require('../MongoConnection.js');

const bodyParser=require("body-parser");
const express=require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
async function TotalOrder(req,res){
  console.log("hello");
  const sid = req.body.sellerid;
  console.log(sid);
  try {
    const db=database;
    
    const sellers = db.collection('items');
    const sellerIdToSearch = sid;

    const result = await sellers.find({ sellerId: sellerIdToSearch})
    const data = await result.toArray();


    const items = data.map(item => item.item);
    console.log(items.length); 

    if(items.length==0){
      
      res.send("No orders found");
    }
    else
    {
      console.log(items)
      res.status(200).json({ items });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal Server Error' });
  } 
}
module.exports = TotalOrder;