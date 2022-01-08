const path = require('path')

console.log(path.sep)

const filePath = path.join('/Test','sub','test.txt')

console.log(filePath)
console.log(path.basename(filePath))

const abs = path.resolve(__dirname, 'Test', 'sub', 'text.txt')
console.log(abs)