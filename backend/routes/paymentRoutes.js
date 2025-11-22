const express = require('express');
const router = express.Router();
const { sendMoney, history } = require('../controller/paymentController');
const  auth  = require('../middleware/auth');

console.log("paymentController:", require('../controller/paymentController'));
// paymentController: {
//   sendMoney: [AsyncFunction (anonymous)],
//   history: [AsyncFunction (anonymous)]
// }

router.post('/sendMoney', auth , sendMoney);
router.get('/history', auth, history);

module.exports = router;