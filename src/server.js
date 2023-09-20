// Version Express
require('dotenv').config();
const express = require('express'); 
const {configStaticFile, configViewEngine} = require('./config/viewEngine')
const app = express();
const webRouter = require('./routes/web')
const database = require('./config/database')//connection
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

configStaticFile(app)
configViewEngine(app)

//Khai báo routes
app.use('/',webRouter)


database.query(
  'select * from Users',
  function(err, results, fields) {
    console.log("----results: ",results); // results contains rows returned by server
  }
);

app.listen(port, hostname, () => {
    console.log(`web is running on port ${port}`)
})