// const multer = require('multer') // v1.0.5
// const update = multer()
const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getABC = (req,res) => {
    return res.render('example.ejs');
}

const postCreateUser = (req, res) => {
    console.log(req.body)
    return res.send("Đã thêm mới user")
}

module.exports = {
    getHomePage: getHomePage,
    getABC: getABC,
    postCreateUser: postCreateUser
}