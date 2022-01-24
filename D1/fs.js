const fs = require('fs')

//const first = fs.readFileSync('./Test/test.txt', 'utf8')

//console.log(first)

//fs.writeFileSync('./Test/output.txt', `Here is the output ${first}`, {flag: 'a'})

//const result = fs.readFileSync('./Test/output.txt', 'utf8')

//console.log(result)


fs.readFile('./Test/test.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})



