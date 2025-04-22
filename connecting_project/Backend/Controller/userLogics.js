let user = require("../Collection/User")

let userFunction = {
    register: async function (req, res){
        try {
            let userData = new user (req.body)
            let saveData = await userData.save();
            res.status(200).json({
                message: "User Registered Successfully",
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = userFunction;