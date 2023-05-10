const express = require('express')
const router = express.Router();
const { createVaccineInfo, fetchvaccine, updateinfo, deleteVaccine } = require('../controller/vaccineinfo.js');




router.post('/createvaccine', createVaccineInfo)
router.get('/fetchvaccine', fetchvaccine)
router.put('/updateinfo/:id', updateinfo)
router.delete('/deleteVaccine/:id', deleteVaccine)


module.exports = router