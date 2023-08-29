const path = require('path')

console.log('path sep = ', path.sep);/*index path*/

//join path =>

const filePath = path.join(`content`,'sub','test.text')
console.log('filepath=',filePath)

//base (file) path

const base = pathname(filePath)
console.log('base name', base);

//obsolute path 

