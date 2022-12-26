import  express from "express";
import BusInfo from "../models/busModel.js";


const busRouter = express.Router();

busRouter.get('/', async(req,res) => {
    const buses = await BusInfo.find({});
    res.send(buses);
})

busRouter.get('/bus/:busId', async(req,res) => {
    const bus = await BusInfo.findOne({ _id: req.params.busId});
    if(bus){
        res.send(bus);
    }
    else{
        res.status(404).send({ message: 'Bus is not available'})
    }
})

export default busRouter;