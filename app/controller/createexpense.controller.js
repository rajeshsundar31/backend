
const ExpenseModel = require('../model/expensedetail.model.js');

exports.createExpense = async (req, res) => {
    try{
        const expenseData = new ExpenseModel(req.body);

        const saveExpense = await expenseData.save();
        res.status(201).json({ success: true, expense: saveExpense });

    }catch (e) {
        console.error('Error saving expense:', error);
        res.status(500).json({error: `Internal Server error:${e}`});
    }

};

exports.getExpenseDetail = async (req, res) => {
    console.log('fetching details')
    try {
        const expense = await ExpenseModel.find();
        res.status(200).json(expense)
    } catch (e) {
        res.status(500).json(e)
    }
};