const user = {
    username : "shuvam",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function(){
        // console.log("got user details from data base")
        // console.log(`username: ${this.username}`);
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)



function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
    };

    return this; 
}

const userOne = new User("shuvam", 12, true);
const userTwo = new User("ramu", 11, false);

//console.log(userOne.constructor); 
console.log(userTwo); 
//userTwo.greeting(); 
