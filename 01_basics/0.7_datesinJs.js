let myDate = new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)
//console.log(myDate.toLocaleTimeString())


// let myCreateDate = new Date(2025,0,23)
// console.log(myCreateDate)
// let myCreateDate = new Date(2025,0,23,5,3)
//let myCreateDate = new Date("2023-01-14")
let myCreateDate = new Date("01-14-2023")
//console.log(myCreateDate.toLocaleString());

let newDate = new Date()
//console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})