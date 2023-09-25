const database = require('../config/database');
const {getAllUsers,getUserByID,editUserByID,createUser,deleteUserByID} = require('../service/crud_service');

const getHomePage = async(req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs',{listUser: results});
}

const getCreateForm = (req,res) => {
    return res.render('create-form.ejs');
}

const getEditForm = async(req,res) => {
    let id= req.params.id;
    console.log(id);
    let results = await getUserByID(id);
    return res.render('edit.ejs',{user:results});
}

const postDelete = async(req,res) => {
    let id = req.params.id;
    let user = await getUserByID(id);
    res.render('confirm-delete.ejs',{user});
}

const postHandleDelete = async (req, res) => {
    let id = req.body.id;
    await deleteUserByID(id);
    res.redirect('/');
}

const postCreateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    await createUser(email,name,city);
    res.redirect('/');
}

const postEditUser = async(req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    await editUserByID(id,name,email,city);
    res.redirect('/');
}

module.exports = {
    getHomePage: getHomePage,
    postCreateUser: postCreateUser,
    getCreateForm: getCreateForm,
    getEditForm:getEditForm,
    postEditUser: postEditUser,
    postDelete: postDelete,
    postHandleDelete: postHandleDelete
}