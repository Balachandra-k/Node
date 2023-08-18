const {sum,mul} = require(`./data/calc`)
const {p,q,r} = require(`./data/number`)

console.log(`sum=`,sum(p,q))
console.log('sum=', sum(q,r))
console.log('sum=' ,sum(r,p))

mul(p,q)
mul(r,q)
mul(p,q)