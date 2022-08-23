var readlineSync = require('readline-sync');

// // Complete Code
var userName = readlineSync.question("What is your name? ");

console.log("\nWelcome "+ userName +" to Do you know me? Quiz");
console.log("_________________________\n");

var score = 0;

var highScores = [
  {
    name: "Shahbaz",
    score: 5,    
  },
  {
    name: "Aman",
    score: 4,
  }
]

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log("Correct answer! :)");
    score = score+1;
  }
  else
  console.log("Wrong answer! :(");

  console.log("Current score = "+score);
  console.log("_________________________\n");
}

questionOne = {
  question: "What is my nickname? ",
  answer: "Pappu",
}

questionTwo = {
  question: "What is my profession? ",
  answer: "Engineer",
}

questionThree = {
  question: "What is my favorite hobby? ",
  answer: "Reading",
}

questionFour = {
  question: "What is my high school's name? ",
  answer: "CCDS",
}

questionFive = {
  question: "What is my favorite color? ",
  answer: "Red",
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

for(i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
  }

console.log("Yay! You scored: "+score);

console.log("\nHIGH SCORES:");
for(i=0;i<highScores.length;i++){
  console.log(highScores[i].name, highScores[i].score);
}