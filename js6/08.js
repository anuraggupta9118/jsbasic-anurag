const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,curval){
//     console.log(`acc:${acc} and curval: ${curval}`)
//     return acc+curval
// },6)

const myTotal=myNums.reduce((acc,curval)=>acc+curval,5)
console.log(myTotal)



const shoppingCart=[
    {
        itemName:"py Course",
        price:2999
    },
    {
        itemName:"java Course",
        price:200
    },
    {
        itemName:"cpp Course",
        price:3000
    }
]

const pricetwo=shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(pricetwo)
