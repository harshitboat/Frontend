let birthYear = parseInt(prompt("Enter your birth year:"));
let currentYear = 2025;
let age = currentYear - birthYear;

console.log(`You are ${age} years old.`);
for (let year = birthYear; year <= currentYear; year++) {
  console.log(year);
}
