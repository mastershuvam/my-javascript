const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complite')
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log('Async task two')
    resolve()
    },1000)
}).then(function(){
    console.log('async task two complite')
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    },1000)
 })//.then(function(user){
//     console.log(user)
// })


promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        eror = false
        if(!eror){
            resolve({username: "shuvam",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}).then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(eror){
    console.log(eror)
}).finally(()=> console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/mastershuvam')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
