//check user name and password in login
//if exist create a new jwt
//send the token back to UI

//setup authentication so that get request can be accessed

const jwt = require('jsonwebtoken')
const {BadRequest} = require('../errors')

const login = async(req, res) => {
    const{username, password} = req.body
    console.log(username, password);
    //mong, joi 
    if(!username || !password) {
       throw new BadRequest('please provide email and password')
    }
    
    const id = new Date().getDate();
    const token = jwt.sign({id, username}, process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user create', token})
    
    res.send('Fake login/register/signup')
}

const dashboard = async(req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello ${req.user.username},`,secret: `Here is your authorized data your lucky number is ${luckyNumber}`})
}

module.exports = {
    login, dashboard
}