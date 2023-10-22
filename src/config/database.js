const mongoose = require('mongoose');
require('dotenv').config();

const connection = async() => {
  try {
    const option = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME_MONGODB
    }
    await mongoose.connect(process.env.DB_HOST_MONGODB, option);
    console.log(">>>> Connected ??? ",mongoose.connection.readyState);
  } catch (error) {
    console.log('>>>> Error connection DB: ',error);
  }
}

module.exports = connection;