const mongoose = require('mongoose')
const userscgema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        trim: true

    },
    email: {
        required: true,
        type: String,
        trim: true,
        validate: {
            validator: (value) => {
                const re =
                    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                   return value.match(re);
            },
            message:'Please enter a valid email address'


        }

    },
    password:{
        required:true,
        type:String,
       // validator: (value) => {
         //   return value.length>6;
           
        //},
        //message:'password must be grater than 6'

    },
    address:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default:'user',
    }
})
const user=mongoose.model('user',userscgema)
module.exports=user