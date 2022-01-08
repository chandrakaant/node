//built in modules

const os = require('os')
 
//info about current user
var user = os.userInfo()
console.log(user)

//system uptime is secnods
console.log(`System uptime is ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs);