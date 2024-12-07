const name = "shuvam"
const repoCount = 20

/*
//proses no 1
console.log(name+repoCount+" value")

//prosess no 2
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

*/

const gameName = new String('pubg_battel_ground')

// console.log(gameName[0])
// console.log(gameName.__proto__)

//console.log(gameName.length)
//console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(0, 9)
console.log(anotherString)


const newStringOne = "  Shuvam  "
console.log(newStringOne.trim())

const url = "https://Shuvam.com/Shuvam%20Ghosh"

console.log(url.replace('%20','-'))

console.log(url.includes('Shuvam'))
console.log(url.includes('Babu'))

console.log(gameName.split('_'))

