const express=require("express");
const router = express.Router();


const newuser=require("../Login/newuser.js");
const checkuser=require('../Login/login.js');

router.get("/", (req, res) => {
    res.send('Authorization Route');
    });

router.post("/register",newuser);//y


router.post("/login",checkuser);//y

module.exports = router;