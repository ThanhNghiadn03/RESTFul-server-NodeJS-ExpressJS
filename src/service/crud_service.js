const database = require('../config/database')
const User = require("../models/users");

const getAllUsers = async() => {
    let results = await User.find({});
    return results;
}

const getUserByID = async (id) => {
    let result = await User.findById(id).exec();
    return result;
}

const editUserByID = async(id,name,email,city) => {
    let condition = {_id : id};
    let update = {name: name, email: email, city: city};
    return await User.updateOne(condition,update);
}

const createUser = async (email,name,city) => {
    let information = {
        email: email,
        name: name,
        city: city
    };
    return await User.create(information);
}

const deleteUserByID = async(id) => {
    let condition = {_id:id};
    return await User.deleteOne(condition);
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserByID: getUserByID,
     editUserByID: editUserByID,
    createUser: createUser,
    deleteUserByID: deleteUserByID
}