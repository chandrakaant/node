const { time } = require('console');
const express = require('express')
const app = express();
const logger = require('./logger');
const { people } = require('./data');
const person = require('./routes/person')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended : false}))
app.use(express.json())



app.post('/login', (req, res) => {
    console.log(req.body)
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`)
    }
})

app.use('/api/people', person)


app.listen(5000, ()=>{
    console.log('server is listening on 5000')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})
  