const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { addBank, getBank, findByPhone } = require('../controller/userController');

router.post('/addBank', auth, addBank);
router.get('/getBank', auth, getBank);
router.get('/findByPhone/:phone', findByPhone);

module.exports = router;