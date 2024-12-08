function sayName() {
    console.log("S: Smart");
    console.log("H: Humble");
    console.log("U: Unique");
    console.log("V: Victory");
    console.log("A: Attitude");
    console.log("M: Magnificent");
}

//sayName()

function addTwoNumbers(number1,number2){
    res = number1+number2
    //return res
    //return number1+number2
}

//console.log(addTwoNumbers(4,5))


function loginUserMessage(username){
    if(!username){
        return `please enter a username`
    }
    return `${username} just loged in`
}


// console.log(loginUserMessage("Bapi"));

// function calculateCartPrice(num1){
//     return num1
// }//with out using spred

// function calculateCartPrice(...num1){
//     return num1
// }//using spred [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1,val2,...num1){
    return num1
}//out put  [ 500, 2000 ]

//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username : "shuvam",
    price: 199
}

function HandelObject(anyobject){
    //console.log(`username is ${anyobject.username} and price ${anyobject.price}`)
}

//HandelObject(user)

HandelObject({
    username: "kastav",
    price: 399
})

const myNewArray = [200,300,400,500]

function secondEliment(getArray){
    return getArray[1];
}

//console.log(secondEliment(myNewArray))

console.log(secondEliment([200,800,400,500]))