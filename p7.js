//assert modules
//handle run the exceptions(run time errors)

const assert = require('assert')

// assert(10 > 15)

const x = [
    {
        name: "John"
    }
]

const y = {
    name : "john"
}

const z = [
    {
        name: "John"
    }
]
//values must be stirctly deep equal,(structure,datatypes,property, values)
// assert.deepStrictEqual(x,y)
assert.notDeepStrictEqual(x,y)


// assert.deepStrictEqual(x,y)