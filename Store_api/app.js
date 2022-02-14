require('dotenv').config();
require('express-async-wrapper')

//async errors

const express = require('express');
const app = express();

const notFoundMiddleWare = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/error-handler');

const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

//middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href = "/api/v1/products">Products</a>')
})

app.use('/api/v1/products', productRouter)

//product routes

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);


const port = process.env.PORT || 3000;

const start = async() => {
    try {
        //connect db
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server is litening on port ${port}`));
    } catch (err) {
        
    }
}

start();