const registerModel = require('../../model/regitser_model/register.model');


exports.createUser = async(req, res) => {
    try {
        const {email} = req.body;
        const userExist = await registerModel.findOne({email});
        if (userExist){
            return res.status(400).json({error: "User already Exsist"});
        }
        const userData = new registerModel(req.body);
        const savedUser = await userData.save();
        res.status(201).json({ success: true, user: savedUser});
    } catch (e) {
        res.status(500).json({error: "Internal Server error"});
    }
}