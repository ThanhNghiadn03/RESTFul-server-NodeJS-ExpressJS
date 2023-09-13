const express = require('express');
const router = express.Router();
const {getHomePage,getABC} = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/abc', getABC)

module.exports = router;