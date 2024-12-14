let myName = "shuvam    "
let myRoll = "19"

console.log(myName.trueLength);

let myHeros = ["thor","spiderMan"]

let heroPower = {
    thor : "humer",
    spiderman : "sling",

    getSpiderPower: function(){
       // console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shuvam = function(){
   // console.log(`shuvam is present in all objects`)
}

Array.prototype.heyShuvam = function(){
    //console.log(`shuvam sayas hello`)
}

// heroPower.shuvam()
// myHeros.shuvam()
// myHeros.heyShuvam()
// heroPower.heyShuvam()

//++++++inheritance+++++++


const User = {
    name: "coffie",
    email: "coffie@gmail.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


const taSupport = {
    makeVideo: 'js assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}


Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport,Teacher)

let anorherUsername = "coffieCode"

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}

anorherUsername.trueLength()
"Shuvam".trueLength()
"iceTea".trueLength()