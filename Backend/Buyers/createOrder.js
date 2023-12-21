// Creates order for the buyer with seller id

const mongoose = require('mongoose');
const itemsschema = require('../models/items.js');
const express = require('express');
const app = express();
const {database} = require('../MongoConnection.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function createOrder(req,res) {
  
  const sids = req.params.sellerId;
    console.log(sids);

  const recived = req.body.items;
  const sid = sids;
    console.log(sid,recived);


const recieveditems = recived.map(item => item.itemName);
console.log(recieveditems);
const itemsArray = recieveditems;

    const SellerSchema = new mongoose.Schema({
      sellerId: String,
      name: String,
      catalog: [{
        itemName: String,
      }],
    });

    const SellerModel = mongoose.model('sellers', SellerSchema);

    console.log('Connected to MongoDB');

    const Data = await SellerModel.findOne({
      sellerId: sid,
    });

    if (Data) {
      const sellerId = Data.sellerId;
      const items = Data.catalog.map(item => item.itemName);
      const idd = Data.catalog.map(item => item._id);

      const order = [];
      console.log('Seller ID:', sellerId);
      console.log('Items for Seller:', items);

      for (let i = 0; i < itemsArray.length; i++) {
        for (let j = 0; j < items.length; j++) {
          if (itemsArray[i] === items[j]) {
            console.log(1);
            const oriid = mongoose.Types.ObjectId.createFromHexString(idd[j].toString());
            console.log("orriiid", oriid);
            order.push({ item: itemsArray[i] });
            try {
              const newUser = new itemsschema({
                product_id: oriid,
                sellerId: sellerId,
                item: itemsArray[i],
              });

              await newUser.save();
              console.log('User created:', newUser);
            } catch (error) {
              console.error('Error creating user:', error);
            }

            console.log("User Created");
          }
        }
      }

      console.log("Order is", order);
  res.status(200).json({ output:"Order Created"});
  return;
      
    } else {
      console.log('Seller not found with ID:', sid);
      res.status(500).json({ error: 'Seller not found' });
      return;
    }
  } 

module.exports = createOrder;
