const mongoose = require('mongoose');

const Database="DB_For_Ecommerce"

mongoose
    .connect (`mongodb://127.0.0.1:27017/${Database}`,{    //127.07
    useNewUrlParser : true,useUnifiedTopology :true,
}).then (()=>console.log("TO DB"))


const database=mongoose.connection;
module.exports = { database };