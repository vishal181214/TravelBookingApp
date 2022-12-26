import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    userDetails: [
      {
        fullName: { type: String, required: true },
        gender: { type: String, required: true },
        city: { type: String, required: true },
        number: { type: Number, required: true },
        quantity: { type: Number, required: true },
        seatId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      },
    ],
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    busId: { type: String, required: true },
    name: { type: String, required: true },
    fare: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isBooked: { type: Boolean, default: false },
    booked: { type: Date },
  },
  {
    timestamps: true,
  }
);

const BookingDetails = mongoose.model('BookingDetails', bookingSchema);
export default BookingDetails;