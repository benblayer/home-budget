const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res) {
  res.send("Hello World\n");
});

app.post("/budget", (req, res) => {
  console.log(req.body);
});

app.listen(3000, function () {
  console.log("listening on 3000");
});
