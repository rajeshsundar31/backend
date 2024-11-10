const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect('mongodb://localhost:27017/finkin-data').then((con) => {
        console.log('mongo Db is connected......'+ con.connection.host)
    })
}

module.exports = connectDb;