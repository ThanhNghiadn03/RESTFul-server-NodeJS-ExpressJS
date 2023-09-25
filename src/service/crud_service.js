const database = require('../config/database')

const getAllUsers = async() => {
    let [results, fields] = await database.query(
        "SELECT * FROM Users u "
    );
    return results;
}

const getUserByID = async (id) => {
    let [results, fields] = await database.query(
        "SELECT * FROM Users u WHERE id = ?",id
    );
    return results;
}

const editUserByID = async(id,name,email,city) => {
    await database.query (
        "UPDATE Users SET name = ?, email = ?, city = ? WHERE id = ? ", [name,email,city,id]
    );
}

const createUser = async (email,name,city) => {
    await database.query(
        "INSERT INTO Users(email,name,city) VALUES(?,?,?) ",[email, name, city]
    );
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