const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud1",
});

//req = request, res = response
// app.get("/", (req, res) => {
//   //   const sqlInsert =
//   //     "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Shershah', 'Inspiring Movie');";
//   //   db.query(sqlInsert, (err, result) => {
//   //     if (err) console.log(err);
//   //     else res.send("Value inserted");
//   //   });
//   res.send("Hello World");
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES(?, ?);";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
