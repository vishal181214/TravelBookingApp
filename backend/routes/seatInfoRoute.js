import express from "express";
import seatInfoModel from '../models/seatInfoModel.js'

const seatInfoRouter = express.Router();

seatInfoRouter.post('/seatinfo', async(req,res)=>{
    console.log(req.body.busId);
    console.log(req.body.bookedSeats);
    const result = await seatInfoModel.findOne({busId: req.body.busId});
    if(result){
        res.send({
            busId: result.busId,
            bookedSeats: req.body.bookedSeats,
        })
        const ans = new seatInfoModel({
            busId: req.body.busId,
            bookedSeats: req.body.bookedSeats
        })
        let twoone = await ans.save();
    }else{
        res.send("not done");
        const ans = new seatInfoModel({
            busId: req.body.busId,
            bookedSeats: req.body.bookedSeats,
        })
        let twoone = await ans.save();
    }
})

seatInfoRouter.get('/getseatinfo/:busId', async(req,res)=>{
    // console.log(req.params.busId);
 const seatInfo = await seatInfoModel.find({busId:req.params.busId});
 if(seatInfo)
    res.send(seatInfo);
else
    res.status(404).send({ message: 'Seat is not available'})

    // console.log(seatInfo);
})

export default seatInfoRouter;