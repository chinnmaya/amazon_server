const mongoose = require("mongoose");
const { productSchema } = require("./product");

const orderSchema = mongoose.Schema({
  image:{
    type:String,
    required:true,

  },
  name: {
    type: String,
    required: true,
  },
 
  totalPrice: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  userId: {
    required: true,
    type: String,
  },
  orderedAt: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
  },
  paymentmethod:{
    type:String,
    required:true,
  }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
