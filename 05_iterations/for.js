// for(let i = 1;i<=10;i++){
//     if(i==5){
//         console.log("5 is a best no")
//     }
//     console.log(i);
// }

// for(let i =1;i<=10;i++){
//     console.log(`inner loop value: ${i}`)
//     for(let j = 1;j<=10;j++){
//         console.log(`outer loop value:${j}`)
//     }
// }

// for(let i =1;i<=10;i++){
//     for(let j = 1;j<=10;j++){
//         console.log(i+'*'+j+"="+i*j)
//     }
// }

let myArray = ["flash", "batman", "superman"]
let n = myArray.length
for(let i =0;i<n;i++){
    //console.log(myArray[i])
}


//break and continue

for(let i =1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        break
    }
    console.log(`value of i is${i}`)
}


for(let i =1;i<=20;i++){
    if(i==5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`value of i is${i}`)
}