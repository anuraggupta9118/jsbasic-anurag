// if
//   const isUserLoggedIn= true
//   const temprature=41
//   if(temprature<50){
//     console.log("less than 50")
//   }
//  else{
//   console.log("temprature is greater than 50")}

//    console.log("excueted")


//  <,>,<=,>=,==,!=,===

// const score=200

// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power : ${power}`)


// const balance= 1000

// if(balance>500) console.log("test"), console.log("test2");

  // if(balance<500){
  //   console.log("less than")
  // } else if(balance<900){
  //   console.log("less than 900")
  // }else{
  //   console.log("less than 1100")
  // }



const userLoggedIn=true
const debitCard=true
const loggedInFromEmail=true
const loggedInFromGoogle= false


if(userLoggedIn && debitCard && 2==3){
  console.log("Aloow to buy courses")
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("Allow to proccess")
}


