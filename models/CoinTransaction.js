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
    reason: { type: String },
    refId: { type: mongoose.Schema.Types.ObjectId },
  },
  { timestamps: true },
);

export default mongoose.models.CoinTransaction ||
  mongoose.model("CoinTransaction", CoinTransactionSchema);
