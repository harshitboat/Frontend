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