const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email:{type:String , required:true, unique:true},
    password:{type:String , required:true},
    address:{type:String , required:true},
    pincode:{type:String, required:true}
})

const UserDetail = mongoose.model('user',UserSchema)
module.exports = UserDetail
