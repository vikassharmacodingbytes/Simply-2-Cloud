import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    todo_title: { type: String },
    todo_desc: { type: String },
}, { timestamps: true });
const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;
