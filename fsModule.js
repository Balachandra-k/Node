// fs => file system Module

const fs = require('fs')

console.log('file operation started')

//sychronous => direct or without callback function 
//Asyncchornous => indirect or without callback function

const first = fs.readFileSync('./content/file/p1.txt')
const sec = fs.readFileSync('./content/file/p2.txt')

fs. writeFileSync('./content/file/res-1.text', `output of both the filees: \n${first} \n\n${sec}`)

console.log('file write completed')