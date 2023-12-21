const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const buyerdb= require('../models/buyer.js')
const sellerdb=require('../models/seller.js')
const secret_key="$2a$12$H6YD@!#vF8*JhN5uWxQa&4"


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function loginuser(req, res) {
  try {

    const username = req.body.username;
    const password = req.body.pwd;
    const userType = req.body.userType; 
    console.log('Username:', username);
    console.log('Password:', password);
    console.log(userType)
    let User
    if(userType=='buyer')
    {
        User=buyerdb
    }
    else if(userType=='seller')
    {
        User=sellerdb
    }
    

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    
    const user = await User.findOne({ username });

    
    if (!user) {
      return res.status(401).json({ error: 'user Invalid credentials.' });
    }

    
    const isPasswordValid = password;

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'pwd Invalid credentials.' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      `${secret_key}`, 
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = loginuser;