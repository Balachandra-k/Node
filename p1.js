const x = 123;
let y = 42


let res = x * y

console.log('product=' ,res);

if (x > y) {
    console.log('x is greter then y');
}else  {
    console.log('y is greter then x');

}

//looping statement

for (let i = 1; i<= 10; i++) {
    console.log(`${x} *${i} = ${x* i}`);
}

// while loop

let i = 1;

while (i <= 10 ){
    console.log(`${y} * ${i} = ${y*i}`);
    i++;
}

//array

let colors = ["red","green","blue","white","orange"];


//object

let user = {
    name : "balu",
    email : "balu@123.com",
    age : 23,
    mobile : 7483020025
}

// object array 
let course = [
    {
        id : 1,
        title : 'HTML',
        duration : 1
    },
    {
        id : 2,
        title : "css",
        duration : 1
    },
    {
        id : 3,
        title: "javascrpit",
        duration : 1.5
    }
]