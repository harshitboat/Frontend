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
let herAge = "age";
console.log(person[herAge]);
person.birthYear = 2025-person.age;
person.tellYourAge = function(){
    console.log(`I am ${this.age} year old.`);

};
person.tellYourAge();