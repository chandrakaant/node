const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://chandra:TestingUser1234@cluster0.94lsl.mongodb.net/taskmanager?retryWrites=true&w=majority'

const connectDB = (uri) => {
    mongoose.connect(connectionString)
}

module.exports = connectDB