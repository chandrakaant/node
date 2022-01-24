const {createReadStream} = require('fs');

const stream = createReadStream('./Test/big.txt', {highWaterMark: 90000, encoding : 'utf8'});

stream.on('data', (result)=>{
    console.log(result);
})

stream.on('error', (err) =>{
    console.log(err);
})
//reads file in buffer chunks
//default chunk is 64kb
//last buffer reminder
//highWaterMark - control buffer size
//const stream = createReadStream('./Test/big.txt', {highWaterMark: 9000});
//const stream = createReadStream('./Test/big.txt', {encoding : utf8});

