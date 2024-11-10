const express = require('express');
const route = express.Router();

const expense_controller = require('../controller/createexpense.controller');

route.post('/expensedetail', expense_controller.createExpense);
route.get('/getexpense', expense_controller.getExpenseDetail);

module.exports = route;