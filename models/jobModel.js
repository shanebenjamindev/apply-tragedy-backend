// models/jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  position: { type: String },
  company: { type: String, required: true },
  status: { type: String, required: true },
  url: { type: String, required: true },
  address: { type: String, required: true },
  dateSaved: { type: Date, default: Date.now },
  dateApplied: { type: Date },
  followUp: { type: String }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
