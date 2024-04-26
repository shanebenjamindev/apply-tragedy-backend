const Job = require("../models/JobModel")

exports.getJobs = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const Jobs = await Product.find()
            const totalProduct = await Product.countDocuments()
            resolve({
                status: "OK",
                message: "success",
                data: Jobs,
                pageCurrent: page,
                totalProduct: totalProduct,
                totalPage: Math.ceil(totalProduct / limit)
            })

        } catch (e) {
            reject(e)
        }
    })
}
exports.addJob = (newJob) => {
    return new Promise(async (resolve, reject) => {
        const { position,
            company,
            status,
            address,
            url } = newJob
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
