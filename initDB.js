const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL  || 'mongodb://localhost:27017/crs_db', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, `connection error:`));
db.once('open', function() {
  console.log('Mongodb connected!');
});

module.exports = db