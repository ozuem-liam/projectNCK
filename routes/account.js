const express = require("express");
const router = express.Router();
const { account } = require('../controllers');
const verifyToken = require("../middlewares/auth");

router.post('/', account.createAccount);
router.patch('/', account.loginUser);
router.patch('/logout', verifyToken, account.logoutUser);
router.patch('/reset', verifyToken, account.resetPassword);
router.patch('/send_token', verifyToken, account.sendVerificationToken);

module.exports = router;
