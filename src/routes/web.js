const express = require('express');
const router = express.Router();
const {getHomePage,postCreateUser,getCreateForm,getEditForm,
    postEditUser,postDelete,postHandleDelete} = require('../controllers/homeController')

router.get('/', getHomePage);
router.get('/create',getCreateForm);
router.get('/edit/:id', getEditForm);
router.post('/delete/:id',postDelete);
router.post('/delete',postHandleDelete);
router.post('/create-user', postCreateUser);
router.post('/edit-user',postEditUser);

module.exports = router;