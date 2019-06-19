const mongoose = require('mongoose');
const schema = mongoose.Schema;



const Donation = new schema({
   
    name:{
        type:String,
        unique:true
    },
    age:{
        type:Number,
        required:true
       
    },
    place:{
        type:String,
        required:true
       
    },
    donateitem:{
        type:String,
        required:true
       
    },
   
    
    
     
});

const Donations = mongoose.model('donations',Donation);//'details' is mongodb name Details is the schema name;
module.exports=Donations;