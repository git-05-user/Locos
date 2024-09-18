const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRoute = require('./router/userauthorize')
const techRoute = require('./router/techauthorize')


const PORT =8088;
//connect to express app
const app = express()

//middle ware
app.use(express.json());
app.use(cors());
app.use('/userauthorize',userRoute)
app.use('/techauthorize',techRoute)

//connect to mongodb
const dbURL = "mongodb://localhost:27017/userinfo"
mongoose.connect(dbURL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log('server is connected succesfully running on', `${PORT}`)
    });
})
.catch((error)=>{
    console.log('unable to connect the database')
});

