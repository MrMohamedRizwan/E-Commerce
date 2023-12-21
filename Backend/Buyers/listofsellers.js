// Retrives the list of sellers from the database

const mongoose = require('mongoose');
const {database} = require('../MongoConnection.js');
async function listofsellers(req, res) {
  try {
    

    const SellerSchema = new mongoose.Schema({
      name: String,
    });

    const SellerModel = mongoose.model('Seller', SellerSchema);

    
    const sellers = await SellerModel.find({}, 'username -_id');
    console.log(sellers);

    res.status(200).json({ sellers });
  } catch (e) {
    console.error('Error fetching sellers from MongoDB:', e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  finally {
    await mongoose.connection.close();
  }
}
module.exports = listofsellers;
