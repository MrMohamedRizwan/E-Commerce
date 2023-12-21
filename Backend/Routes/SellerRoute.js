const express=require("express");
const router = express.Router();
const retriveCatalog=require('../Buyers/catalog.js')
const pushitems=require('../Seller/pushitems.js')
const TotalOrder = require('../Seller/retriveOrder.js')


router.get("/", (req, res) => {
    res.send('seller Route');
    });

    router.get('/:sellerId',retriveCatalog) //y

    router.post("/create-catalog",pushitems)//y
    
    
    router.get("/orders",TotalOrder); //y
    

module.exports = router;