// Immediately invoked function expressions(IIFE)


(function chai(){
// Named IIFE

    console.log(`DB CONNECTED`)
})();

( (name)=> {
    //unnamed IIFE
    console.log(`DB CONNECTD TWO ${name}`)
})("Anurag")


