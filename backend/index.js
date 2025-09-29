const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

const goods = [
  { id: 10154, name: "Bread" },
  { id: 15740, name: "Milk" },
];

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/products", (req, res) => {
//   res.send("Products ruu orloo");
// });

app.get("/products", (req, res) => {
  res.json(goods);
});

app.post("/products", (req, res) => {
  res.send("Products post");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
