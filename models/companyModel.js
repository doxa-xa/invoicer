const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var companySchema = new Schema({
  company:String,
  country:String,
  city:String,
  address:String,
  id:String,
  vat:String,
  rep:String

var Company = mongoose.model('Company',companySchema);

module.exports = {
  companySchema: companySchema,
  Company: Company
};
