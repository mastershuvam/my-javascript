//global veriable
//let a = 40
//const b = 20
var c = 50

if(true){//->scope
    let a = 20
    const b = 30
    var c = 50
}
// console.log(a);//eror
// console.log(b);//eror
//console.log(c)//out put 50 so var not use


function one(){
    const username = "shuvam"
    
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website) ->eror becose website in function two scope
    
    two()
}

//one()


if(true){
    const username = "shuvam"
    if(username === "shuvam"){
        const website = "youtube"
        //console.log(website+" "+username)
    }
    //console.log(website)
}

//console.log(username)


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1;
}

addTwo(6)

const addTwo = function(num){
    return num+2;
}


//console.log(addTwo)