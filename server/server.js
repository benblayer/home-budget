const express = require("express");
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sc2tb.mongodb.net/home?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const budgetApi = require('./budget');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World\n");
});

app.get("/budgets", async (req, res) => {
  const budgets = await budgetApi.getAllBudgets();
  console.log('budgets:', budgets);
  res.send(budgets);
})

app.post("/budget", (req, res) => {
  console.log("post", req.body);
});

app.delete("/budget", (req, res) => {
  console.log("delete", req.body);
})

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
