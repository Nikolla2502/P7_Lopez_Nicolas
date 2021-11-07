const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/userCtrl');


router.post('/signup',multer, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;