const express = require('express')
const router = express.Router();
const { createUser,updatedUserInfo, fetchUser,fetchAUser,fetchMailSentUser,updateVaccinatedUser,fetchVaccinatedUser, deleteUser, sendMail } = require('../controller/registeredperson.js');




router.post('/createUser', createUser)
router.patch('/updatedUserInfo/:mail', updatedUserInfo)
router.get('/fetchUser', fetchUser)
router.get('/fetchAUser/:id', fetchAUser)
router.get('/fetchMailSentUser', fetchMailSentUser)
router.get('/fetchVaccinatedUser', fetchVaccinatedUser)
router.delete('/deleteUser/:id', deleteUser)
router.patch('/updateVaccinatedUser/:id', updateVaccinatedUser)
router.post('/sendMail/:email', sendMail)


module.exports = router