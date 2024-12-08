const user = {
    username : "shuvam",
    price : 999,
    
    welcomeMassage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}

//user.welcomeMassage()
 //user.username = "Kushal"
 //user.welcomeMassage()

//console.log(this)// out put {}

// const one = function(){
//     let username = "shuvam"
//     console.log(this.username)
// }


//one()

// const one = ()=>{
//     let username = "shuvam"
//     console.log(this.username)
// }

// one()

//const addTwo = (num1,num2) =>{return num1+num2}
// const addTwo = (num1,num2) =>{
//     res = num1+num2
//     return res
// }

//const addTwo= (num1,num2) =>(num1+num2)
//const addTwo= (num1,num2) =>num1+num2

const addTwo = (num1, num2) => ({username: "Shuvam"})

console.log(addTwo(3,4))

//  const myArray = [2, 5, 3, 7, 8]

//  myArray.forEach()
