//singleton
//object.create
//object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "shuvam",
    "full name" : "Shuvam Ghosh",
    [mySym] : "myKey1",
    age: 29,
    location: "West Bengal",
    email: "shuvamjs@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(jsUser.name);
// console.log(jsUser["full name"])//few case
// console.log(jsUser["email"])
// console.log(jsUser.mySym)//undefined
// console.log(jsUser[mySym])//myKey1

jsUser.email = "shuvamVS@chatgpt.com",
//Object.freeze(jsUser)
jsUser.email = "shuvamVS@apple.com",
//console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

