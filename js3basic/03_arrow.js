const user={
    username:"Anurag",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

console.log(this)


// function chai(){
//     let username="Anurag"
//     console.log(this.user)
// }
// chai()

// const chai=function(){
//     let username="Anurag"
//     console.log(this.username)

// }
const chai=()=>{
    let username="Anurag"
    console.log(this.username)

}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=> num1+num2

// const addTwo=(num1,num2)=> (num1+num2)

const addTwo=(num1,num2)=> ({username:"Anurag"})

console.log(addTwo(3,4))