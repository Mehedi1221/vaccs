const express = require('express');

const router = express.Router();
const { addUser, userLogin, userFeedBack, fetchUserFeedBack} = require('../controller/user')

router.post('/addUser', addUser)
router.post('/userLogin', userLogin)
router.post('/adduserFeedBack', userFeedBack)
router.get('/fetchUserFeedBack', fetchUserFeedBack)

module.exports = router;