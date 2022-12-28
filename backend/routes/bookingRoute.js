import express from 'express';
import BookingDetails from '../models/bookingModel.js';
import userInfo from '../models/userModel.js';
const bookingRouter = express.Router();

bookingRouter.post('/booking', async(req,res) => {
    const dataRes = await userInfo.findOne({email: req.body.email});
    if(dataRes){
        const details = new BookingDetails({
            userDetails: req.body.userDetails,
            email: req.body.email,
            compname: req.body.compname,
            number: req.body.number,
            source: req.body.source,
            destination: req.body.destination,
            busId: req.body.busId,
            seatNo: req.body.seatNo,
            fare: req.body.fare,
            isPaid: req.body.isPaid,
            isBooked: req.body.isBooked
        })
        const booked = await details.save();
        res.send("Tickets Sucessfully Booked");
    }
    else{
        res.status(401).send({ message: `Unauthorized Access! Register Yourself! ${dataRes}` });
    }
});

bookingRouter.get('/getbookingdetails', async(req,res)=>{
    const bookDetails = await BookingDetails.find({});
    if(bookDetails)
        res.send(bookDetails);
    else
        res.status(404).send({ message: 'Booking Details are not available'})
})

bookingRouter.put('/edit', async(req,res)=>{
    console.log(req.body.mail);
    const bookDetails = await BookingDetails.findOne({email: req.body.mail});
    if(bookDetails)
    {
        const edit = new BookingDetails({
            isBooked: req.body.isBooked,
        })
        const book = await edit.save();
        res.send(bookDetails);
    }
    else
        res.status(404).send({ message: `No bookings with this id ${req.params.mail}`})
})

export default bookingRouter;