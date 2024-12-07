const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


//marvel_heros.push(dc_heros)
// console.log(marvel_heros)//->out put is[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);//->out put is flash

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)//out put is->[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread

 const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros)//out put is->[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);
// [
//   1, 2, 3, 4, 5,
//   6, 7, 6, 7, 4,
//   5
// ]

//console.log(Array.isArray("Shuvam"))
console.log(Array.from("Shuvam"))//out put is ->[ 'S', 'h', 'u', 'v', 'a', 'm' ]
console.log(Array.of("Shuvam"))//out put is->[ 'Shuvam' ]

let score1 = 100;
let score2 = 200;
let score3 = 400;

console.log(Array.of(score1,score2,score3));//out put is->[ 100, 200, 400 ]
