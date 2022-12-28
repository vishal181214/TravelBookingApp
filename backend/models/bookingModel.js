import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userDetails: {type: String, required: true},
    email: {type: String, required: true},
    compname: {type: String, required: true},
    number: {type: Number, required: true},
    source: {type: String, required: true},
    destination: {type: String, required: true},
    busId: { type: String, required: true },
    seatNo: {type: String, required:true },
    fare: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    isBooked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const BookingDetails = mongoose.model('BookingDetails', bookingSchema);
export default BookingDetails;