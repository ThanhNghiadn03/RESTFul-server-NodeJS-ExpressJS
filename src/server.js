// Version Nodejs 

// const http = require('http');
// const hostname = '127.0.0.1'; //localhost
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plan');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// Version Express
require('dotenv').config();
const express = require('express'); 
const {configStaticFile, configViewEngine} = require('./config/viewEngine')
const app = express();
const webRouter = require('./routes/web')

const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

configStaticFile(app)
configViewEngine(app)

//Khai báo routes
app.use('/test',webRouter)

app.listen(port, hostname, () => {
    console.log(`web is running on port ${port}`)
})