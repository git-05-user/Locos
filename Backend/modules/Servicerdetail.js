const mongoose = require('mongoose')

const ServicerSchema = mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String ,required:true, unique:true},
    password:{type:String ,required:true},
    phoneno:{type:String ,required:true},
    services:{type:String ,required:true},
    address:{type:String ,required:true},
    pincode:{type:String ,required:true}
})

const ServiceProvider = mongoose.model('servicer',ServicerSchema)
module.exports = ServiceProvider