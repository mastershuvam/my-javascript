//singleton

//const trinderUser = new Object()
const trinderUser = {}

trinderUser.id = "123xyz"
trinderUser.name = "Tomy"
trinderUser.isLoggedIn = false;

//console.log(trinderUser)

const regularUser = {
    email : "someone@gmail.com",
    fullname :{
        username:{
            firstname:"Shuvam",
            lastname: "Ghosh"
        }
    }
}


//console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

//const obj3 ={...obj1,...obj2}
//const obj3 = Object.assign({},obj1,obj2)

//console.log(obj3)//-> out put { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "u@gmail.com"
    },
]
    
//user[1].email

// console.log(trinderUser);//{ id: '123xyz', name: 'Tomy', isLoggedIn: false }
// console.log(Object.values(trinderUser));//[ '123xyz', 'Tomy', false ]
// console.log(Object.entries(trinderUser))//;[ [ 'id', '123xyz' ], [ 'name', 'Tomy' ], [ 'isLoggedIn', false ] ]
// console.log(trinderUser.hasOwnProperty('isLoggedIn'));



const course ={
    coursename : "javascript",
    price: "1499",
    courseInstructor: "Shuvam"
}
//const {courseInstructor} = course;
// const {courseInstructor:Instructor} = course;
// console.log(Instructor);

//json 

// {
//     "name":"shuvam",
//     "coursename":"javascript",
//     "price":"free"
// }

// //array object
// [
//     {},
//     {},
//     {}
// ]