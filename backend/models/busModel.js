import mongoose from 'mongoose';

const busSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    busId:{ type: String, required: true, unique: true },
    image: { type: String, required: true },
    departure:{ type: String, required: true },
    duration:  { type: String, required: true },
    description: { type: String, required: true },
    arrival:  { type: Number, required: true },
    fare: { type: Number, required: true },
    seatAvailable: { type: Number, required: true },
    rating: { type: Number, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    bustype: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const BusInfo = mongoose.model('BusInfo', busSchema);
export default BusInfo;