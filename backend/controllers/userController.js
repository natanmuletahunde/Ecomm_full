import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'

// generate the token
const createToken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


// route for the use login


const loginUser = async (req,res)=>{
    try {
          const {email,password} = req.body;
            // checking the email and password are there
          const user = await userModel.findOne({email})
          if(!user){
             return res.json({success:false,message:"User Does not exist"})
          }
           const isMatch = await bcrypt.compare(password,user.password);
           if(isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
           }
              else{
                return res.json({success:false,message:"Invalid credentials"})
              }
    } catch (error) {
         console.log({success:false, message:error.message})   
    }
}


// route for the user register


const registerUser = async (req,res)=>{
       try {
          const {name,email,password} = req.body;
          // checking user already exists or not
          const exists = await userModel.findOne({email})
           if(exists){
            return res.json({success:false,message:"User already exists"})
           }
           // validating the password and email
           if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid email"})  
           }
           // checking that the password is strong or not 
           if(password.length < 8){
              return res.json({success:false, message:"password should be 8 characters"})
           }
           // hash the password
           const salt = await bcrypt.genSalt(10);
           const hashPassword = await bcrypt.hash(password,salt);
           const userUser = new userModel({
            name,
            email,
            password:hashPassword
           })
           const user = await userUser.save();
           const token = createToken(user._id)
           res.json({success:true,token})
       } catch (error) {
             console.log({success:false, message:error.message})
       }
}



// routes for amin login



const adminLogin = async (req,res)=>{
  try {
     const {email,password} = req.body;
     if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email+password,process.env.JWT_SECRET);
         res.json({success:true,token})
     } else {
       res.json({success:false,message:"Invalid credentials"})
     }  
  } catch (error) {
      console.log(error)
      res.json({success:false,message:error.message})
  }  
}

export {loginUser,registerUser,adminLogin}