const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "3001",
  user: "admin",
  password: "123123",
  database: "ligitos_grozio_salonas",
});

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});
