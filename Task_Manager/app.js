const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleWare = require('./middleware/error-handler')
require('dotenv').config()

var util= require('util');
var encoder = new util.TextEncoder('utf-8');

app.use(express.static('./public'))


//routes
app.use('/api/v1/tasks', tasks);


//middleware
app.use(express.json())
app.use(notFound) 
app.use(errorHandlerMiddleWare)

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server started running on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start()