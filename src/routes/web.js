const express = require('express');
const router = express.Router();
const {getHomePage,postCreateUser,getCreateForm,getEditForm,
    postEditUser,getDelete} = require('../controllers/homeController')

router.get('/', getHomePage);
router.get('/create',getCreateForm);
router.get('/edit', getEditForm);
router.get('/delete',getDelete);
router.post('/create-user', postCreateUser);
router.post('/edit-user',postEditUser);

module.exports = router;