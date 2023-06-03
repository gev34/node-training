const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Task = require("./task");

const userSchema = new mongoose.Schema({
  /* inqy avtomat vercnuma 'User' gracy sarquma poqratar u hognaki avelacnuma collectionsneri mej*/
  name: {
    type: String,
    required: true,
    //trimy hanuma skzbi u verji spacery
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can not contain 'password'");
      }
    },
  },
  age: {
    type: Number,
    //ete chgrenq age inqy avtomat esi kvercni
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  avatar:{
    type:Buffer
  }
},{
    //avtomat sarquma createdAt u updatedAt objecti mej
    timestamps:true
});

//es el Taskeri heta kap hastatum
userSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "owner",
});
//kam el karanq routeri mejic kanchenq user.getPublicProfiley u zut es functioni anuny dnenq getPublicProfiley...es meky keyworda!!!
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
  user.tokens = user.tokens.concat({ token });
  user.save();
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

//Hashing passowrd before saving
userSchema.pre("save", async function (next) {
  const user = this;

  //  console.log('before logging in')
  if (user.isModified("password")) {
    //stugum enq vor nora grancvel kam nora update arel
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//Delete user tasks when user is removed
userSchema.pre("remove", async function (next) {
  const user = this;
  await Task.deleteMany({ owner: user._id });
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
