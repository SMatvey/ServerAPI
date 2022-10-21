var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  age: Number,
},
{
  collection:"user"
}
  
);

module.exports = mongoose.model("Users", userSchema);
