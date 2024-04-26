const Job = require('../models/JobModel')

const getJobs = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const Jobs = await Job.find()
            const totalProduct = await Job.countDocuments()
            resolve({
                status: "OK",
                message: "success",
                data: Jobs,
                totalProduct: totalProduct,
                totalPage: Math.ceil(totalProduct)
            })

        } catch (e) {
            reject(e)
        }
    })
}
const addJob = (newJob) => {
    return new Promise(async (resolve, reject) => {
        const { position,
            company,
            status,
            address,
            url } = newJob

            console.log(newJob);
        try {
            const checkedJob = await Job.findOne({
                url: url
            })
            if (checkedJob !== null) {
                resolve({
                    status: 'ERR',
                    message: 'Already exit'
                })
            }
            const newJob = await Job.create({
                position,
                company,
                status,
                address,
                url
            })
            if (newJob) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newJob
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    addJob,
    getJobs
}