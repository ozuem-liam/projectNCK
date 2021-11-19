const express = require("express");
const router = express.Router();
const { account } = require('../controllers');

router.post('/', account.createAccount);
router.patch('/', account.loginUser);

module.exports = router;
