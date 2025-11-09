console.log('File handling in JavaScript ')

const fs = require('fs');

// writing in a file
fs.appendFileSync('output.txt', '\nWriting in the output file kartik' , (err) => {
    if(err) console.log(err);
    else console.log('File written successfully')
})