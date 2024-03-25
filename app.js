const readline = require('readline');
const fs = require('fs');
let textIn = fs.readFileSync('./files/input.txt','utf-8');
console.log(textIn)
let content= 'Data read from input.txt: ${textIn}.  \nDtata created ${new Date()}'
fs.writeFileSync('./files/output.txt',content);
