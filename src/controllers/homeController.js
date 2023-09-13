const getHomePage = (req, res) => {
    res.send('Hello world from controller');
}

const getABC = (req,res) => {
    res.render('example.ejs');
}

module.exports = {
    getHomePage: getHomePage,
    getABC: getABC
}