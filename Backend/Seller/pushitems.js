// Push Items to the database 

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function addItemsToCatalog(req,res) {
  
    try {
    
      const sellerId=req.body.sellerId;
      const newItems=req.body.newItems;
    const SellerSchema = new mongoose.Schema({
    
      name: String,
      catalog: [{
        itemName: String,
      }],
    
    });

    const SellerModel = mongoose.model('Seller', SellerSchema);

    const sellers = await SellerModel.find({}, 'username -_id');


    
      const updatedSeller = await SellerModel.findOneAndUpdate(
        { sellerId },
        { $push: { catalog: { $each: newItems } } },
        { new: true } 
      );
  
      if (!updatedSeller) {
        console.log(`Seller with ID ${sellerId} not found`);
        res.send("Seller with ID ${sellerId} not found");
      }
  
      console.log(`Items added to catalog for seller ${sellerId}`);
      console.log('Updated Seller:', updatedSeller);
      res.status(200).json({ updatedSeller });
    }
    catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  

  module.exports = addItemsToCatalog;
  