const JobController = require('../controllers/JobController')
const express = require("express");
const router = express.Router()

router.get('/get-all', JobController.getJobs)
router.post('/create', JobController.addJob)
router.delete('/delete/:id', JobController.deleteJob)
// router.get('/get-details/:id', JobController.getDetailsProduct)
// router.put('/update/:id', JobController.updateProduct)
// router.post('/delete-many', JobController.deleteMany)

module.exports = router