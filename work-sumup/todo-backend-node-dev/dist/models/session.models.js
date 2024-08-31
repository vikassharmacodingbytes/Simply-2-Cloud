import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
}, {
    timestamps: true
});
const SessionModel = mongoose.model("session", sessionSchema);
export default SessionModel;
