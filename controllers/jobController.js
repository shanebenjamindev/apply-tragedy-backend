const Job = require('../models/jobModel');

// Get all jobs
exports.getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        console.log("jobs");
        res.json(jobs);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

// Add a new job
exports.addJob = async (req, res) => {
    const {
        position,
        company,
        status,
        dateSaved,
        dateApplied,
        followUp,
    } = req.body;

    try {
        const newJob = new Job({
            position,
            company,
            status,
            dateSaved,
            dateApplied,
            followUp,
        });
        await newJob.save();
        res.json('Job added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

// Delete a job
exports.deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json('Job deleted.');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};
