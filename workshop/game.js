let score = 0;
const IncresaseScore = (points) => (score+=points);
const DecreaseScore = (points) => (score-=points);
IncresaseScore(10);
DecreaseScore(5);
IncresaseScore(20);
console.log(score);
