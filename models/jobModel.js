// models/jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  status: { type: String, required: true },
  dateSaved: { type: Date, default: Date.now },
  dateApplied: { type: Date },
  followUp: { type: Date }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
