// Immediately Invoked Function Expressions (IIFE)
// IIFE is often used to prevent global variable  pollution and avoiding Global Scope Pollution

//we are use iife becouse

(function one(){
    console.log(`DB CONECTED`);
})(); //-> must end if you not end then you get eror

((name)=>{
    console.log(`DB CONECTED TWO ${name}`)
})('shuvam')