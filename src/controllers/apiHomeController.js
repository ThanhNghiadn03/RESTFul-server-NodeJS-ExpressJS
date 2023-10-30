const {getAllUsers,getUserByID,editUserByID,createUser,deleteUserByID} = require('../service/crud_service');

const getUsersAPI = async(req,res) => {
    let result = await getAllUsers();
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
};

const postUsersAPI = async(req,res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await createUser(email,name,city);
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
};

const putUsersAPI = async(req,res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;
    let city = req.body.city;
    let updatedUser = await editUserByID(id,name,email,city);
    return res.status(200).json({
        errorCode: 0,
        data: updatedUser
    })
};

const deleteUsersAPI = async(req,res) => {
    let id = req.body.id;
    let user = await deleteUserByID(id);
    return res.status(200).json({
        errorCode: 0,
        data: user
    })
}

module.exports = {
    getUsersAPI: getUsersAPI,
    postUsersAPI: postUsersAPI,
    putUsersAPI: putUsersAPI,
    deleteUsersAPI: deleteUsersAPI
}