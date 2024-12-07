let score = "shuvam"
/*
work same
console.log(typeof score);
console.log(typeof (score));
*/
let valueInNumber = Number(score)
/*
console.log(typeof valueInNumber);//number 
console.log(valueInNumber);//output-> 
NaN->Not-a-Number
*/

let isLoggedIn = "shuvam"
let booleanIsLoggedIn = Boolean(isLoggedIn )

//console.log(booleanIsLoggedIn)//out put -> true


let someNumber = 33;
/*
let stringNumber = String(someNumber)
console.log(typeof stringNumber)//->out put string

*/
/*
let booleanNumber = Boolean(someNumber)->true
console.log(booleanNumber);

// 1 => true; 0 => false
// "" => false
// "Shuvam" => true
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value

//console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%2)

let str1 = "hello"
let str2 = "shuvam"

 let str3 = str1+" "+str2

// console.log(str3)

// console.log("1"+2)//->out put 12
// console.log(1+"2")//->out put 12
// console.log("1"+2+2)//->output 122
// console.log(1+2+"2")//->32

/*
//Prefix
let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter1)
//Postfix
let gameCounter2 = 100;
gameCounter2++;
console.log(gameCounter2)
*/
//Prefix
let x1 = 10;
let y1 = ++x1;

console.table({ x1, y1 });
//Postfix
let x2 = 10;
let y2 = x2++;

console.table({ x2, y2 });

