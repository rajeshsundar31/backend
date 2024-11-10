const express = require('express');
const route = express.Router();

const user_controller = require('../controller/user.controller');

route.get('/getdata', user_controller.getUserList);

module.exports = route;