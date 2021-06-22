const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sc2tb.mongodb.net/home?retryWrites=true&w=majority`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const budgetApi = require("./budget");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World\n");
});

app.get("/budgets", async (req, res) => {
  const budgets = await budgetApi.getAllBudgets();
  res.send(budgets);
});

app.post("/budget", async (req, res) => {
  try {
    const added = await budgetApi.createBudget(req.body);
    res.send({ added })
  } catch (error) {
    console.error("Error on add budget:", error);
  }
});

app.delete("/budget", async (req, res) => {
  const deleted = await budgetApi.deleteBudget(req.body.budgetName);
  res.send({ deleted });
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
