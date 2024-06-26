const Job = require('../models/JobModel')
const User = require('../models/UserModel')

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

const updateStatus = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProduct = await Job.findOne({
                _id: id
            })
            if (checkProduct === null) {
                resolve({
                    status: 'ERR',
                    message: 'The product is not defined'
                })
            }

            const updatedProduct = await Job.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: updatedProduct
            })
        } catch (e) {
            reject(e)
        }
    })
}

const getAllUserJob = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const job = await Job.find({
                user: id
            }).sort({ createdAt: -1, updatedAt: -1 })

            if (job === null) {
                resolve({
                    status: 'ERR',
                    message: 'The order is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'SUCESSS',
                data: job,
            })
        } catch (e) {
            // console.log('e', e)
            reject(e)
        }
    })
}
const addJob = (newJob) => {
    return new Promise(async (resolve, reject) => {
        const { position, company, status, address, url, user } = newJob;
        try {

            const checkJob = await Job.findOne({ url: url, user: user })

            if (checkJob !== null) {
                resolve({
                    status: 'ERR',
                    message: 'DUPPLICATE',
                });
            }
            else {

                const createdJob = await Job.create({
                    position,
                    company,
                    status,
                    address,
                    url,
                    user: user
                });

                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdJob
                });
            }

        } catch (error) {
            reject(error);
        }
    });
};


module.exports = {
    addJob,
    getJobs,
    getAllUserJob,
    updateStatus
}