const mongoose = require('mongoose');
const Collection="items";
const mongooseschema = new mongoose.Schema({
  // _id: false,  // Disable automatic creation of _id field
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  sellerId: {
    type: String,
    unique: true,
  },
  item: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`${Collection}`, mongooseschema);
