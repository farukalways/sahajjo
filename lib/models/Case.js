import mongoose from "mongoose";

const CaseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    location: { type: String, required: true },
    tag: { type: String, required: true },
    story: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    raisedAmount: { type: Number, default: 0 },
    donors: { type: Number, default: 0 },
    daysLeft: { type: Number, required: true },
    urgent: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["active", "completed", "expired"],
      default: "active",
    },
    gradient: { type: String, default: "from-teal-400 to-teal-600" },
    initial: { type: String },
    tagColor: { type: String },
  },
  { timestamps: true },
);

export default mongoose.models.Case || mongoose.model("Case", CaseSchema);
