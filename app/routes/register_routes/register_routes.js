const express = require('express');
const route = express.Router();

const register_controller = require('../../controller/register_controller/register.controller');

route.post("/register", register_controller.createUser);

module.exports = route;