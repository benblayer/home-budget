const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  id: String,
  description: String,
  date: Date,
  amount: Number,
  name: String,
});

module.exports = mongoose.model('Transaction', transactionSchema)