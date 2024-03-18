const accountId=144223
let accountEmail="anurag123@gmail.com"
var accountPassword="123456"
accountCity="jaipur"
let accountState;

//accountId=2
accountEmail="hc@hc.com"
accountPassword="212121"
accountCity="mumbai"

/*
prefer not to use var
beacause of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])