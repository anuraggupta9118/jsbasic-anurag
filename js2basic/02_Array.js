const marHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marHeros.push(dcHeros)
// console.log(marHeros[3][1]);

// const myArr=marHeros.concat(dcHeros);
// console.log(myArr);


const allnewHeros=[...marHeros,...dcHeros]
// console.log(allnewHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray=anotherArray.flat(Infinity)

console.log(usableAnotherArray)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hietsh"))
console.log(Array.from({name:"hitesh"}))////interesting case in Array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))