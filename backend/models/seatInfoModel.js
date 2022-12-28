import mongoose from "mongoose";

const seatinfoSchema = new mongoose.Schema(
    {
        busId: {type:String},
        bookedSeats:[{
            type:String
        }]
    },
    {
        timestamps: true,
    }
)

const seatBookInfo = mongoose.model('seatBookInfo', seatinfoSchema);
export default seatBookInfo;