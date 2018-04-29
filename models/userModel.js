const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const company = require('./companyModel.js');
var userSchema = new Schema({
  id: String,
  name: String,
  surName:String,
  email:String,
  password:String,
  password2:String,
  mobile:{
    type: String,
    default:''
  },
  companies:[
    company:company.companySchema
  ]
});

var User = mongoose.model('User',userSchema);

module.exports = User;
