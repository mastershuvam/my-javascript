const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    rb: 'rubie'
}

// for(const key in myObject){
//     console.log(`${key}short cut is for ${myObject[key]}`)
// }


const programing = ["js","py","java","cpp","rb"]

for(const key in programing){
    //console.log(`${key} -> ${programing[key]}`)
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for(const key in map){
    console.log(key)
}