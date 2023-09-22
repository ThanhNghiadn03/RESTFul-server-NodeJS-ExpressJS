const database = require('../config/database');

const getHomePage = (req, res) => {
    return res.render('home.ejs');
}

const getABC = (req, res) => {
    return res.render('example.ejs');
}

const getCreateForm = (req,res) => {
    return res.render('create-form.ejs');
}

const postCreateUser = async(req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    console.log('>>> Email: ' + email + ' ; Name: ' + name + ' ; City: ' + city);
    let [results, fields] = await database.query(
        "INSERT INTO Users(email,name,city) VALUES(?,?,?) ",[email, name, city]
    );
    console.log(results);
    return res.send('Đã thêm mới user');
}

module.exports = {
    getHomePage: getHomePage,
    getABC: getABC,
    postCreateUser: postCreateUser,
    getCreateForm: getCreateForm
}