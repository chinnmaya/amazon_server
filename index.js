const express=require("express")
const authRoute=require('./routes/auth')
const mongoose=require('mongoose')
const app=express();
const DB='mongodb+srv://babun:babun12345@cluster0.y99ptqf.mongodb.net/?retryWrites=true&w=majority'
const PORT=process.env.PORT || 3000;
app.use(express.json())
app.use(authRoute)
mongoose.connect(DB).then(()=>{
    console.log("connection sucessful")

}).catch((e)=>{console.log(e)})

app.listen(PORT,()=>{
    console.log("connecteed at prot 3000 hello")
});
