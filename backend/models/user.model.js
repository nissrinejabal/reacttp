const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

  username: {type: String,required: true,unique: true,trim: true, minlength: 3 },
  gender: { type:String, required:true },
  dob:{type:Date},
  news:{type:Boolean },
email:{type:String, trim: true,lowercase: true,unique: true,required: 'Email address is required',},
photo:{type:String }},
{ timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;