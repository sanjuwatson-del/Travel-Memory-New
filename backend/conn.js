const mongoose = require('mongoose')
require("dotenv").config();
const URL = process.env.MONGO_URI

mongoose.connect(URL)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB ERROR: '))
db.once('open', () => {
   console.log("MONGO_URI =",process.env.MONGO_URI);
});

module.exports = {db, mongoose}
