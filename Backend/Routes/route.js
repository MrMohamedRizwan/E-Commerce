const express=require("express");
const app = express();
const bodyParser=require("body-parser");
const router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const newuser=require("../Login/newuser.js");
const checkuser=require('../Login/login.js');

const listofsellers=require('../Buyers/listofsellers.js')

const retriveCatalog=require('../Buyers/catalog.js')

const pushitems=require('../Seller/pushitems.js')

const createOrder = require('../Buyers/createOrder.js')

const TotalOrder = require('../Seller/retriveOrder.js')






// app.post("/api/auth/register",newuser);//y


// app.post("/api/auth/login",checkuser);//y

// app.get("/api/buyer/list-of-sellers",listofsellers)//y

// app.post('/api/buyer/create-order/:sellerId',createOrder);//y

// app.get('/api/seller-catalog/:sellerId',retriveCatalog) //y

// app.post("/api/seller/create-catalog",pushitems)//y


// app.get("/api/seller/orders",TotalOrder); //y



//////////////////////////////////////////////////////////////////////







router.get("/", (req, res) => {
    res.send('Hello World!');
    });

router.post("/auth/register",newuser);//y


router.post("/auth/login",checkuser);//y

router.get("/buyer/list-of-sellers",listofsellers)//y

router.post('/buyer/create-order/:sellerId',createOrder);//y

router.get('/seller-catalog/:sellerId',retriveCatalog) //y

router.post("/seller/create-catalog",pushitems)//y


router.get("/seller/orders",TotalOrder); //y


// app.listen(7000,()=>{
//     console.log('Server is running on port 7000');
// })

module.exports = router;