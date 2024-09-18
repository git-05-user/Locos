const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserDetail = require('../modules/Userdetail');
const nodemailer=require('nodemailer');
const dotenv=require('dotenv');
const SECRET_KEY = 'secret-key';
dotenv.config();


//routes
//User registraion
//post register
router.post('/userregister', async(req,res)=>{
    try{
        const {username,email,password,address,pincode} = req.body
        const emailCheck = await UserDetail.findOne({email})
        if(emailCheck){
           return res.status(404).json({message:'email address is already exists'})
        }
        if (password.length < 8 || password.length > 16) {
            return res.status(400).json({ message: 'Password must be between 8 and 16 characters.' });
        }
        const newUser = new UserDetail({
            username,email,password,address,pincode
        })
        await newUser.save()
        res.status(201).json({message:'account created successfully'})
    }
    catch(error){
        res.status(500).json({error:'error while signup'})
    }
})

//GET REGISTERED USERS

router.get('/userregister',async(req,res)=>{
    try{
        const users = await UserDetail.find()
        res.status(201).json(users)
    }
    catch(error){
        res.status(500).json({error:'unable to get users'})
    }
})

//GET LOGIN

router.post('/userlogin', async(req,res)=>{
    try{
        const {email,password} = req.body
        const user = await UserDetail.findOne({email})
        if(!user ){
            return res.status(401).json({error:'User not found'})
        }
        if(user.password != password){
            return res.status(401).json({error:'Incorrect Password'})
        }
        const token = jwt.sign({userId: user._id},SECRET_KEY,{expiresIn:'1hr'})
       return  res.json({
        message:'Login Successful',
        username:user.username,
        token:token
    })

        //res.json({token})
    }
    catch(error){
        res.status(500).json({'Error':error})
    }
})

//FORGOT PASSWORD SENDING TO USER
router.post('/userForgotPassword',async(req,res)=>{

    const email=req.body.email;
    try{
        //Find the user by email
        const user = await UserDetail.findOne({email:email});
        if(!user){
            return res.status(404).json({message:'No such email in DB'});
        }
    
        const Transport=nodemailer.createTransport(
            {
                service:"gmail",
                auth:{
                    user:process.env.MAILID,
                    pass:process.env.MAILPASS
                }
            }
        );
    
        //sending mail to requested users 
            const send={
                from:`Loco's ${process.env.MAILID}`,
                to:`${email}`,
                subject:'Regarding forgot password',
                html:`<!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
        h2 { color: #333; }
        p { color: #555; }
        a { color: #1a73e8; text-decoration: none; }
        .footer { font-size: 12px; color: #777; margin-top: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Hello ${user.email},</h2>
        <p>We received a request to for your password. </p>
        <p><h5>Here is Your Password:<mark>${user.password}</mark></h5></p>
        <p>If you did not request this change, please ignore this email or contact support if you have questions.</p>
        <div class="footer">
          <p>Best regards,<br>Loco's Service Team</p>
        </div>
      </div>
    </body>
    </html>`
    };
       
    
        await Transport.sendMail(send);
        return res.status(200).json({message:"Password is send successfully"});
    
    }
    
    catch(err)
        {
        return res.status(501).json({message:"Internal Error"});
        }
    });

    module.exports=router;