const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    //kapa hastatum Useri het es toghov const User = mongoose.model("User", userSchema);
    ref: "User",
  },
},{
    timestamps:true
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
