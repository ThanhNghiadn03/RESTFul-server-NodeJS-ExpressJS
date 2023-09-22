const express = require('express');
const router = express.Router();
const {getHomePage,getABC,postCreateUser,getCreateForm} = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/create',getCreateForm);
router.post('/create-user', postCreateUser)

module.exports = router;