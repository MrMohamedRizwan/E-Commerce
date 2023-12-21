const express=require("express");
const router = express.Router();

const listofsellers=require('../Buyers/listofsellers.js')
const createOrder = require('../Buyers/createOrder.js')


router.get("/", (req, res) => {
    res.send('Buyer Route');
    });


    router.get("/list-of-sellers",listofsellers)//y

    router.post('/create-order/:sellerId',createOrder);//y

module.exports = router;