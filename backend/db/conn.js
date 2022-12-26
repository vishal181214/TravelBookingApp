import mongoose from "mongoose";

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/MyTraveller',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('Connected to db');
})
.catch((error)=>{
    console.log(error.message);
});