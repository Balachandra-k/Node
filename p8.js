//Buffer module

const { buffer } = require("stream/consumers")

//memory allocation

const buf = Buffer.alloc(5)
console.log('safe memory=', buf)

//unsafe memory
const buf1 = Buffer.alloc(5)
console.log('unsafe memory ',buf1 ) //can allow grapge values

//from() -> ASCII values 

const buf2 = Buffer.from('javascript')
console.log('ascii',buf2);
console.log('ascii to string', buf2.toString());

//contact two buffer

let a1 = Buffer.from('welcome to ')
let a2 = Buffer.from('node js server script');

let res = [a1,a2]
let out = Buffer.concat(res)

console.log(`output =`, out)
console.log(`string out =`, out.toString() )
