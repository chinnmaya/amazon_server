const express=require('express')
const mongoose=require('mongoose');
const user = require('../models/user');
const bcryptjs = require('bcryptjs');
const authRoute=express.Router();
const User=require("../models/user")


authRoute.post("/api/sigup",async(req,res)=>{
    try{
    const {name,email,password}=req.body;
    const exitinguser= await User.findOne({email})
    if(exitinguser){
        return res.status(400).json({msg:"user is already exist"})
    }
    const hasedpassword=await bcryptjs.hash(password,8)
    let user=new User({
        email,
        password:hasedpassword,
        name
    });
    user=await user.save();
    res.json(user);
}catch(e){
    res.status(500).json({error:e.message})
}
})
module.exports=authRoute;