const fruit = ["apple" , "banana","cherry"];
const [first,seond,fourth,fifth]=[
"apple",
"banana",
"cherry",
"mango",
"grapes",
];
console.log(fifth,fourth);

//spread
const fruits = ["apple" , "banana","cherry"];
const morefruits= ["mango" , "grapes","orange"];
const combinedFruits = [...fruits,...morefruits]
console.log(combinedFruits);

