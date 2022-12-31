// const mongoose = require("mongoose");
import mongoose from 'mongoose'
const seatSchema = new mongoose.Schema({
    seat_id: {
        type: Number
    },
    status:{
        type: String
    },
    username:{
        type: String
    }
})

const bookSeat = mongoose.model('seat',seatSchema);

export default bookSeat;