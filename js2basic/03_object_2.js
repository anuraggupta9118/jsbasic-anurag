// const tinderUser=new Object() //  singleton object
const tinderUser={} // non-singleton object 

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn= false

// console.log(tinderUser)

const regularUser={
    email:"sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:" anurag",
            lastname: " Gupta"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


const object1={
    1:"a",
    2:"b"
}

const object2={
    3:"c",
    4:"d"
}
// const obj3={object1,object2}
// const obj3=Object.assign(object1,object2)

const obj3={...object1, ...object2}
console.log(obj3)

const user=[
    {
        id:1,
        email:"anurag@gmail.com"
    },
    {
        id:1,
        email:"anurag@gmail.com"
    },
    {
        id:1,
        email:"anurag@gmail.com"
    },
    {
        id:1,
        email:"anurag@gmail.com"
    }
]
console.log(user[1].email)
console.log(tinderUser)


console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))