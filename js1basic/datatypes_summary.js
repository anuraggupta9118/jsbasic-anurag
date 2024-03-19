 // primitive

 // 7 Types: String ,Number,Boolean, null, undefinied, symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber = 345652387573563835635n



 // Reference (Non -Primitive)

 // Array, Object, Functions

const heros= ["shaktiman","naagraj","doga"];
let myObj ={
    name: "Anurag",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof anotherId);

// http://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-primitive)

let  myChannel="Anuraggupta"

let anotherName=myChannel;
anotherName="ChaiurCode"

console.log(anotherName);
console.log(myChannel);

let userOne={
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo=userOne;

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);