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
    let id= req.query.id;
    let results = await getUserByID(id);
    return res.render('edit.ejs',{user:results});
}

const getDelete = async(req,res) => {
    let id = req.query.id;
    await deleteUserByID(id);
    return getHomePage(req,res);
}

const postCreateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    await createUser(email,name,city);
    return getHomePage(req,res);
}

const postEditUser = async(req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    await editUserByID(id,name,email,city);
    return getHomePage(req,res);
}

module.exports = {
    getHomePage: getHomePage,
    postCreateUser: postCreateUser,
    getCreateForm: getCreateForm,
    getEditForm:getEditForm,
    postEditUser: postEditUser,
    getDelete: getDelete
}