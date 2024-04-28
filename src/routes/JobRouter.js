const JobController = require('../controllers/JobController')
const express = require("express");
const router = express.Router()

router.get('/get-all', JobController.getJobs)

router.post('/create', JobController.addJob)
router.delete('/delete/:id', JobController.deleteJob)
router.get('/get-all-user-job/:id', JobController.getAllUserJob)

// router.get('/get-details-order/:id', OrderController.getDetailsOrder)
// router.get('/get-details/:id', JobController.getDetailsProduct)
// router.put('/update/:id', JobController.updateProduct)
// router.post('/delete-many', JobController.deleteMany)

module.exports = router