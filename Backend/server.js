const express = require('express');
const bodyParser = require('body-parser');
const authRoutes=require('./Routes/AuthorizationRoute.js')
const buyerRoutes=require('./Routes/BuyerRoute.js')
const sellerRoutes=require('./Routes/SellerRoute.js')

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Mount the todo routes
app.use('/api/auth', authRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/seller', sellerRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
    });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
