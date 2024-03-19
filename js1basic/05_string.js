const name="Anurag"
const repoCount=50

// console.log(name + repoCount +"value");

console.log(`My name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);

const gameName= new String('AnuragTc')

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('T'));

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString= gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="      Anurag    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url ="htttps://anurag.com/anurag%20gupta"
console.log(url.replace('%20','-'))

console.log(url.includes('gambhir'))