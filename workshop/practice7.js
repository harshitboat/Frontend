//set time
let count = 1;
const timer = setInterval(() => {
    console.log("hello"+count);
    count++;
    if (count >5) clearInterval(timer);
},1000);