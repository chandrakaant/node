const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

var util= require('util');
var encoder = new util.TextEncoder('utf-8');

app.use(express.static('./public'))


//middleware
app.use(express.json())


//routes
app.get('/hello', (req, res)=>{
    res.send("Task Manager App");
})

app.use('/api/v1/tasks', tasks);

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