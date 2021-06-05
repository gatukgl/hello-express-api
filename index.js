const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const returnValue = {
    title: "Javascrip Bonus",
    description: "Lorem ipsum",
  };
  res.json(returnValue);
});

app.listen(port, () => {
  console.log(`Application started at http://localhost:${port}`);
});
