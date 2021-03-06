// userModel.js
var mongoose=require('mongoose');
// Setup schema
var userSchema=mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 1
  },
  logged: {
    type: Boolean
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

let User=module.exports=mongoose.model('user', userSchema);

module.exports.get=function (callback, limit) {
  User.find(callback).limit(limit);
}
