//object

const person = {
    name:"harshit",
    age: "19",
    city : "mathura",
    introduce: function(){
        return `hello my name is ${this.name},
        I am ${this.age} years old.
        I'm from ${this.city}`;
    },
};
// dot notation
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.introduce());
// bracket notation
console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);
console.log(person["introduce()"]);