const mongoose = require("mongoose");

// {
//     "id": 1,
//     "first_name": "kritika",
//     "last_name": "lakra",
//     "email": "idobell0@tinyurl.com",
//     "gender": "female",
//     "vehicle": "Maserati"
//   },

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
