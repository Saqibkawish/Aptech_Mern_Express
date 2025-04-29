let user = require("../collection/User")
let b = require("bcrypt")
 let user_function={
    register: async function(req,res){
        try{
            let {name,email,password,gender,age} = req.body
            let email_check = await user.findOne({email : email})
            if (email_check){
                res.status(409).json({msg : "Email Already Exist"})
            }else{


            let user_data = new user(req.body);
            let save_data = await user_data.save();
            res.status(200).json({msg: "User registered successfully"});
        }
    }  catch(error){
                res.status(501).json({msg:error.message});
        }
    }
 }
 module.exports=user_function;