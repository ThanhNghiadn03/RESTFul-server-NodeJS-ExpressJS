const mongoose = require('mongoose');
require('dotenv').config();

const connection = async() => {
  try {
    await mongoose.connect('mongodb://root:123456@localhost:27018');
    console.log(">>>> Connected ??? ",mongoose.connection.readyState);
  } catch (error) {
    console.log('>>>> Error connection DB: ',error);
  }
}

module.exports = connection;