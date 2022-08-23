var readlineSync = require('readline-sync');

// // Complete Code
var userName = readlineSync.question("What is your name? ");

console.log("\nWelcome "+ userName +" to the Marvel Quiz!");
console.log("_________________________\n");

var score = 0;

var highScores = [
  {
    name: "Shahbaz",
    score: 10,    
  },
  {
    name: "Aman",
    score: 9,
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
  question: "How many Infinity Stones are there? ",
  answer: "Six",
}

questionTwo = {
  question: "Who is Tony Stark’s father? ",
  answer: "Howard Stark",
}

questionThree = {
  question: "Captain America’s shield and Bucky’s arm are made of? ",
  answer: "Vibranium",
}

questionFour = {
  question: "Who was able to pick up Thor’s hammer in Endgame? ",
  answer: "Captain America",
}

questionFive = {
  question: "On what planet was the Soul Stone in Infinity War? ",
  answer: "Vormir",
}

questionSix = {
  question: "Who rescued Tony Stark and Nebula from space? ",
  answer: "Captain Marvel",
}

questionSeven = {
  question: "What is Tony Stark’s daughter’s name? ",
  answer: "Morgan Stark",
}

questionEight = {
  question: "Black Panther is set in which fictional country? ",
  answer: "Wakanda",
}

questionNine = {
  question: "How would Groot answer this question? ",
  answer: "I am Groot",
}

questionTen = {
  question: "Who saved the world by scarificing his own life in Endgame? ",
  answer: "Ironman"
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for(i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
  }

console.log("Yay! You scored: "+score);

console.log("\nHIGH SCORES:");
for(i=0;i<highScores.length;i++){
  console.log(highScores[i].name, highScores[i].score);
}