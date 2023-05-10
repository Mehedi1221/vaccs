const express = require('express');

const router = express.Router();
const { addUser, userLogin} = require('../controller/user')

router.post('/addUser', addUser)
router.post('/userLogin', userLogin)

module.exports = router;