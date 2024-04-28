// models/jobModel.js
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  position: { type: String },
  company: { type: String, required: true },
  status: { type: String, required: true },
  url: { type: String },
  uniqueIdentifier: { type: String, unique: true },
  address: { type: String },
  dateSaved: { type: Date, default: Date.now },
  dateApplied: { type: Date },
  followUp: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
