const JobService = require('../services/JobService')
const Job = require('../models/JobModel')

const getJobs = async (req, res) => {
    {
        try {
            const response = await JobService.getJobs()
            return res.status(200).json(response)
        }
        catch (e) {
            return res.status(404).json({
                message: e
            })
        }
    }
}

const getAllUserJob = async (req, res) => {
    try {
        const userId = req.params.id
        if (!userId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The userId is required'
            })
        }
        const response = await JobService.getAllUserJob(userId)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

// Add a new job
const addJob = async (req, res) => {
    try {
        const { position, company, status, address } = req.body
        if (!position || !company || !status || !address) {
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
const deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.json('Job deleted.');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

const updateStatus = async (req, res) => {
    try {
        const productId = req.params.id
        const data = req.body
        if (!productId) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productId is required'
            })
        }
        const response = await JobService.updateStatus(productId, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
};

module.exports = {
    getJobs,
    addJob,
    deleteJob,
    getAllUserJob,
    updateStatus
}