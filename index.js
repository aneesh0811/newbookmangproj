const express = require("express");
const { users } = require("./data/users.json");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is running now",
    data: "hey wassup man",
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    data: users, 
  });
});

app.get("*", (req, res) => {
  res.status(404).json({
    message: "THIS ROUTE DOESN'T EXIST",
  });
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`); 
});
