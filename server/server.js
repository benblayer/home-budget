const express = require("express");
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
const getAllBudgets = require('./budget');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sc2tb.mongodb.net/home?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World\n");
});

app.get("/budgets", (req, res) => {
  const budgets = getAllBudgets();
  res.send(budgets);
})

app.post("/budget", (req, res) => {
  console.log("post", req.body);
});

app.delete("/budget", (req, res) => {
  console.log("delete", req.body);
})

app.listen(3000, () => {
  console.log("listening on 3000");
});
