// singleton

 // object literals

 const mySym=Symbol("key1")

 const jsUser={
    name : " Anurag",
    "fullname":"Anurag Gupta",
    age : 24,
    [mySym]:"mykey1",
    location:"lucknow",
    email:"anurag@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
 }
//  console.log(jsUser.lastLoginDays)
//  console.log(jsUser["email"])
//  console.log(jsUser["fullname"])
//  console.log(jsUser[mySym])

 jsUser.email="anurag@yahoo.com"
//  Object.freeze(jsUser)
 jsUser.email="anura@gmail.com"
//  console.group(jsUser)

jsUser.greeting= function(){
    console.log("Hello JS User")
}
jsUser.greetingtwo = function(){
    console.log(`Hello JS User,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingtwo())
