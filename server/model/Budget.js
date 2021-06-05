const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: { type: String, unique: true },
  startDate: Date,
  durationInMonths: Number,
  initialAmount: Number,
  currentAmount: Number,
  category: String,
});

module.exports = mongoose.model('Budget', budgetSchema)