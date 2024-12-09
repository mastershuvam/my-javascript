//for of

const arr = [1,2,3,4,5,6,7]

for(const num of arr){
   // console.log(num)
}

const greeting = "hello world"

for(const greet of greeting){
    if(greet == " "){
        continue
    }
    //console.log(greet)
}

const map = new Map()

map.set('IN',"India")
map.set('US', "United States of America")
map.set('FR', "France")
map.set('GR',"German")

for(const [key,value] of map){
    console.log(key, ':-', value)
}

const myObject = {
    game1: 'pubg',
    game2: 'free fire'
}

for(const [key,value] of myObject){
   console.log(key, ':-', value)
}