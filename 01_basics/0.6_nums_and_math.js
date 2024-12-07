const score = 400
// console.log(score)
// console.log(typeof score)

const balance = new Number(100)
// console.log(balance)
const otherNumber = 123.8966

//console.log(otherNumber.toPrecision(5))

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'))

//// +++++++++++++ Maths +++++++++++++++++++++++++++++
 //console.log(Math);
//  console.log(Math.abs(-4))
//  console.log(Math.round(4.3))//->4
//  console.log(Math.ceil(4.3))//->5
//  console.log(Math.floor(4.9))//->4
//  console.log(Math.min(4,3,5,6,8))
//  console.log(Math.max(4,3,5,6,2))

//console.log(Math.random())
//console.log((Math.random()*20)+1)
//console.log(Math.floor((Math.random()*20)+1));

//a dice game
const min = 1
const max = 6

console.log(Math.floor(Math.random()*(max-min+1))+min)
