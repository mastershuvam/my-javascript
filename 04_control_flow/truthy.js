const userEmail = []

if(userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}


//falsy values
//false,0,-0,BigInt 0n,"",null,NaN,undefined

//truth value

//"0",'false'," ",[],{},function (){}

if(userEmail.length === 0){
    console.log("array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}



// Nullish Coalescing Operator (??): null undefined


let val1;
//val1 = 5??10
//val1 = null??10
//val1 =  undefined ?? 15
val1 = null ?? 10 ?? 20

// Terniary Operator
//condition?true:false

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("i am eat becouse price is less then 80"):console.log("i am not eat beacouse price is more then 80")