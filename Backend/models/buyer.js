const mongoose=require('mongoose');
const Collection="buyer";

const mongooseschema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });
module.exports=mongoose.model(`${Collection}`,mongooseschema);

