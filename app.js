const { response } = require("express");
const express = require("express");

require("dotenv/config");

const app = express();

app.use(express.static("public"));

app.all("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
  });

//This responds to all HTTP verbs
app.all("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.listen(5000, () => {
    console.log("App listening on port 3000")
});
