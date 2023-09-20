const express = require('express');
const router = express.Router();
const {getHomePage,getABC,postCreateUser} = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/abc', getABC)
router.post('/create-user', postCreateUser)

module.exports = router;