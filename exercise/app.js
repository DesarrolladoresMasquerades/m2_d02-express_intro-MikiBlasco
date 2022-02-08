const { response } = require("express");
const express = require("express");

require("dotenv/config");

const app = express();

app.use(express.static("public"));

app.all("/home", (request, response) => {
    response.sendFile(__dirname + "/views/home.html");
  });

app.all("/hobbies", (request, response) => {
  response.sendFile(__dirname + "/views/hobbies.html");
});

app.all("/", (request, response) => {
    response.sendFile(__dirname +"/views/index.html");
  });

app.listen(3000, () => {
    console.log("App listening on port 3000")
});