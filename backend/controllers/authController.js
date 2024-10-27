import { hasPass , comparePass } from "../helper/authHelper";

import UserModel, { User } from '../models/user.model.js'

import JWT from 'jsonwebtoken'


//signUp controllers   
async function Register(req,res){

const {fullname,email,phoneNumber,password,profile}=req.body

if (!fullname) return res.status(400).send("Name is required");
if (!email) return res.status(400).send("Email is required");
if (!password) return res.status(400).send("Password is required");
if (!phoneNumber) return res.status(400).send("Phone is required");
if (!profile) return res.status(400).send("profile is required");

try {

    const existingUser=await User.findOne({email:email})
    if(existingUser){
        res.status(400).send({
            message:"email alread exists Try New",
            success:false
        })


        
    }

    const hashedPassword = await hasPass(password);



    const user=new UserModel.schema({

        fullname,email,phoneNumber,password:hashedPassword,role,profile

    })
await user.save()


res.status(201).json({
    success: true,
    message: "User registered successfully",
  });


    
} catch (error) {

    console.log(error);
    res.status(500).send({
        success:false,
        Message:"failed to add user Hemant bro ",

    })




    
}





}







//login controller 



async function login (req,res){


    const {email,password}=req.body

    if (!email) return res.status(400).send("Email is required");
    if (!password) return res.status(400).send("Password is required");

    try {

     const    VaildUser =await UserModel.findOne({email:email})
     if(!VaildUser){
        res.send("Phle Register to kar le bahi {User Not Found}")

     }

     const hashpass=comparePass(passVaildUser.password)
     if(!hashpass){
        res.send("invalid password")
     }

     //token lelo
     const token=JWT.sign({_id:VaildUser._id},process.env.JWT)





     res.status(200).send({
        success:true,
        message:"logined successfully",
       token,
       user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phone: user.phoneNumber,
      }

     })

        
    }
    
    
    
    catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"something went wrong ji"
        })
    }

}

export {Register,login}