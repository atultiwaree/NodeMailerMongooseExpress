require("dotenv").config();
const http = require("http");
const logger = require("morgan");
const express = require("express");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("common"));
const PORT = process.env.PORT || 3001;

//Import Routes
const user_routes = require("./routes/user.routes");

//Main code
app.use("/user", user_routes);

mongoose
  .connect("mongodb://0.0.0.0:27017/userData")
  .then(() => console.log("MongoDb : START"));
server.listen(PORT, (err) => {
  !err ? console.log(`Server @${PORT} : START`) : console.log("Server : ERROR");
});
