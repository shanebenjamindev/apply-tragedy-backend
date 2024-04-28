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

// Generate unique identifier before saving
jobSchema.pre('save', function (next) {
  if (!this.uniqueIdentifier) {
    // Generate unique identifier (e.g., using UUID)
    this.uniqueIdentifier = generateUniqueIdentifier();
  }
  next();
});

// Placeholder function for generating a unique identifier
function generateUniqueIdentifier() {
  // Example: Generate a UUID
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
