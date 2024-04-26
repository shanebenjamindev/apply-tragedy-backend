const Job = require('../models/JobModel');
const JobService = require('../services/JobService')
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
    try {
        const { position, company, status, address, url } = req.body
        if (!position || !company || !status || !address || !url) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await JobService.addJob(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
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
