const { readFileSync, writeFileSync } = require('fs')
console.log('start')

for(let i = 0; i < 10000; i++) {
    writeFileSync('./Test/big.txt', `hello world ${i}\n`, {flag: 'a'})
}

//Here JS processes the file synchronously where it will run the code line by line
//Read file sync might take a lot of time and block the resources for other users. node will not be able to server other users in this case
// const first = readFileSync('./Test/test.txt', 'utf8')
// const second = readFileSync('./Test/test2.txt', 'utf8')

// writeFileSync(
//   './Test/output.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )
// console.log('done with this task')
// console.log('starting the next one')