import mongoose from "mongoose";

const CoinTransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: { type: String, enum: ["earned", "spent"], required: true },
    amount: { type: Number, required: true },
    reason: { type: String }, // "signup_bonus", "donation", "admin_grant"
    refId: { type: mongoose.Schema.Types.ObjectId }, // donation _id বা অন্য ref
  },
  { timestamps: true },
);

export default mongoose.models.CoinTransaction ||
  mongoose.model("CoinTransaction", CoinTransactionSchema);
