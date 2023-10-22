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
    await database.query (
        "UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ? ", [name,email,city,id]
    );
}

const createUser = async (email,name,city) => {
    await User.create({
        email: email,
        name: name,
        city: city
    })
}

const deleteUserByID = async(id) => {
    await database.query(
        "DELETE FROM Users WHERE id = ?",id
    );
}

module.exports = {
    getAllUsers: getAllUsers,
    getUserByID: getUserByID,
     editUserByID: editUserByID,
    createUser: createUser,
    deleteUserByID: deleteUserByID
}