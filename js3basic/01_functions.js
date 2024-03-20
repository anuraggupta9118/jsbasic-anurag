function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("G");
}

// sayMyName()

function addTwoNumber(number1,number2){
    // console.log(number1+number2);
    return number1+number2;
}
// addTwoNumber(4,5);
const result=addTwoNumber(4,5);
// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("please enter a valid user name ")
        return;
    }
    
    return `${username} just logged in`
    
}
// console.log(loginUserMessage("Anurag"));
// console.log(loginUserMessage())

function calculateCartprice(...num1){
    return num1;

}
// console.log(calculateCartprice(200,400,500,600))

const user={
    username:"Anurag",
    price:199
}
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
 }

//  handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,300,400,600]

function returnSecondvalue(getArray){
    return getArray[1];
}
console.log(returnSecondvalue(myNewArray))




