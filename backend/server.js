import express from "express";
import cors from "cors";
import busRouter from "./routes/busRoute.js";
import userRouter from "./routes/userRoute.js";
import './db/conn.js'
const app = express();
const port = process.env.PORT || 3500;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/home', busRouter);
app.use('/home/users', userRouter);

// app.use((error, req, res, next)=>{
//     res.status(500).send({ message:error.message});
// })

app.listen(port, ()=>{
    console.log(`server Statred at ${port}`);
})