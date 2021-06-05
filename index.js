const express = require("express");
const db = require("./db");

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  const returnValue = {
    title: "Javascrip Bonus",
    description: "Lorem ipsum",
  };
  res.json(returnValue);
});

app.get("/books", (req, res) => {
    const statement = db.prepare("SELECT * from books")
    const books = statement.all()
    res.json(books)
})

app.post("/new", (req, res) => {
  const { title, description } = req.body;
  const statement = db.prepare(
    "INSERT INTO books (title, description) VALUES (?, ?)"
  );
  const info = statement.run(title, description);
  res.json(info);
});

app.listen(port, () => {
  console.log(`Application started at http://localhost:${port}`);
});
