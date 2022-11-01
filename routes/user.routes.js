const express = require("express");

//Import controller

const {
  regController,
  verifyController,
} = require("../controllers/user.controller");
const routes = express.Router();

//Import Middlewares

routes.post("/register", regController);
routes.get("/verify/:id", verifyController);

module.exports = routes;
