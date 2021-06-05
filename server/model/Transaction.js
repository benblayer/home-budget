const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  description: String,
  date: Date,
  amount: Number,
  budgetName: String,
  personName: String,
});

module.exports = mongoose.model('Transaction', transactionSchema)