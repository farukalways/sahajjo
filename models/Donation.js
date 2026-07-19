import mongoose from "mongoose";
import { nanoid } from "nanoid";

const DonationSchema = new mongoose.Schema(
  {
    caseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Case",
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    coinAmount: { type: Number, required: true, min: 1 },
    trackingId: { type: String, default: () => nanoid(10), unique: true },
    anonymous: { type: Boolean, default: false },
    donorName: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Donation ||
  mongoose.model("Donation", DonationSchema);
