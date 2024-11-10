
//getUserList

const usermodel = require('../model/user.model.js');

exports.getUserList = async (req, res) => {
    try{
        const user = usermodel.find();
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({e});
    }

}