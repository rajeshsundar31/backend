const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    expenseDetail: {type: String, required: true},
    amount: {type: Number, required: true},
    expenseType: {type: String, required: true},
    tansactionDate: {type: Date, required: false}
});

const expenseModel = mongoose.model('expenseDetails', expenseSchema);

module.exports = expenseModel;