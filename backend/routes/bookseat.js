import express from 'express';
import bookSeat from '../models/bookseat.js';
const router = express.Router();
router.get("/reserve",async(req,res) => {
    try{
        const allseat = await bookSeat.find().sort({seat_id: 1});
        // console.log(allseat);
        res.status(200).send(allseat);
    }catch(err){
        res.status(500).json("cannot get data");
    }
})


router.post("/reserve/:id",async (req, res) => {
    console.log(req.body.data);
    try{
        const checkStatus = await bookSeat.findOne({seat_id:req.body.data});
        if(checkStatus)
        {
         const  updateStatus = await bookSeat.updateOne(
                            {
                            seat_id: req.body.data
                            },{
                                $set: {
                                    status: "booked",
                                }
                            }
                        )
        const allseat = await bookSeat.findOne({seat_id: req.body.data});
        res.status(200).send({msg: "Booking Confirmed"})
        }
    }catch(error){
        res.status(500).send(error)
    };
    
})

router.post("/admin/reserve/:id",async (req, res) => {
    console.log(req.body.data);
    try{
        const checkStatus = await bookSeat.findOne({seat_id:req.body.data});
        if(checkStatus)
        {
         const  updateStatus = await bookSeat.updateOne(
                            {
                            seat_id: req.body.data
                            },{
                                $set: {
                                    status: "available",
                                }
                            }
                        )
        const allseat = await bookSeat.findOne({seat_id: req.body.data});
        res.status(200).send({msg: "Booking Confirmed"})
        }
    }catch(error){
        res.status(500).send(error)
    };  
})

router.get('/getseat',async(req,res)=>{
    try{
        const seats = await bookSeat.find({});
        res.send(seats);
    }catch(error){
        res.send(error);
    }
})

export default router;