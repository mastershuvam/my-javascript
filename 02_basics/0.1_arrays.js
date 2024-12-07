const myArr = [1,2,3,4,5,6,7]
const myHeros = ["Sayan","Kushal","Samiran"]

const myArr2 = new Array(1, 2, 3, 4, 5, 6);
//console.log(myArr2);

//Array Mehods

myArr.push(8)
// myArr.push(9)
// myArr.pop()

// console.log(myArr.includes(12))
// console.log(myArr.indexOf(5))
// console.log(myArr);

// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr);
// console.log(typeof newArr)

//slice & splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);






