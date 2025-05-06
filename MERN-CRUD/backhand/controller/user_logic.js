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
    },
    get_all_user : async function(req,res){
        try {
            let user_record = await user.find().select("-password").sort({"record_at" : -1});
            return res.status(200).json(user_record)
        } catch (error) {
            res.status(501).json({msg:error.message});
            
        }
    },

    delete_user : async function(req,res){
        try {
            let {id} = req.params
            let find_id = await user.findById(id)
            if (find_id) {
                await user.findByIdAndDelete(find_id)
                return res.status(200).json({msg : "User Deleted Successfully"})
                
            }
        } catch (error) {
            res.status(501).json({msg:error.message});
            
        }
    },

    update_record : async function (req,res){
        try {
            let {id} = req.params;
            let{name , age , email , gender} = req.body 

            let id_exist = await user.findById(id);
            if (id_exist) {
                let updaterecord = {
                    name : name ,
                    email : email ,
                    age : age , 
                    gender : gender 
                }

                await user.findByIdandUpdate(id , updaterecord)
                return res.status(200).json({msg : "User Update Successfully"})
                
            }
        } catch (error) {
            res.status(501).json({msg:error.message});
        }
    }


 }
 module.exports=user_function;