const mongoose=require('mongoose');
const Collection="seller";

const mongooseschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },  
  password: {
    type: String,
    required: true,
    },
    phoneNumber: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, 'Phone number is required'],
    },
    catalog: [{
      itemName: String,
    }],
    
    
    sellerId: {
      type: String,
      unique: true,
    },
  });
  
module.exports=mongoose.model(`${Collection}`,mongooseschema);

