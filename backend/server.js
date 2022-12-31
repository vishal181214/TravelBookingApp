import express from "express";
import cors from "cors";
import busRouter from "./routes/busRoute.js";
import userRouter from "./routes/userRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
import seatInfoRouter from './routes/seatInfoRoute.js'
import bookseat from "./routes/bookseat.js";
import './db/conn.js'
const app = express();
const port = process.env.PORT || 3500;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/home', busRouter);
app.use('/home/users', userRouter);
app.use('/home', bookingRouter)
app.use('/home',seatInfoRouter)
app.use("/home", bookseat)

app.listen(port, ()=>{
    console.log(`server Statred at ${port}`);
})