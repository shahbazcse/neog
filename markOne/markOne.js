var readlineSync = require('readline-sync');

/*var userName = readlineSync.question('What is your name? ');

console.log('Hello! ' +userName+ ', Welcome to KBC!');

var userAnswer = readlineSync.question('Am I a doctor? ');
var score = 0;
var answer = 'no';
if(userAnswer === answer){
  console.log("You're right!");
  score = score+1;
  console.log("Total score: "+score);
}
else{
  console.log("You're wrong!");
  console.log("Total score: "+score);
}

function Mul(num1,num2){
  var x = num1*num2;
  return x;
}
var result = Mul(1,2);
console.log(result);

var userAnswer = readlineSync.question("What is the real name of Captain America? ");
var realAnswer = 'Steve Rogers';

function checkAnswer(answer){
  if(answer===realAnswer){
    console.log("You're answer is correct!");  
  }
  else{
      console.log("You're answer is wrong!");
    }
}
checkAnswer(userAnswer);

var userAnswer = readlineSync.question("What is your name? ")
var n = readlineSync.question("Hey "+userAnswer+"!, how many times do you want to print your name? ");

function printName(j){
  for(i=0;i<j;i++){
    console.log(userAnswer);
  }
}
printName(n);
console.log('You printed your name '+n+' times');

var num1=22;
var num2=0;
for(i=0;i<10;i++){
  var sum=num1+num2;
  console.log(sum);
  num2=num2+1;
}

var List = ['Rice', 'Potato', 'Beans', 'Bread', 'Pasta'];
console.log(List[0]);
console.log(List[2]);
console.log(List[List.length-1]);

for(i=0;i<List.length;i++){
  console.log(List[i]);
}

var Ironman = {
  name: "Tony Stark",
  strength: 80,
  flight: "Yes",
  power: 70,
  suitColor: "Red",
  intelligence: 100,
}

var Thor = {
  name:  "Thor Odinson",
  strength: 100,
  flight: "Yes",
  power: 100,
  suitColor: "Black",
  intelligence: 50,
}

console.log(Ironman.name);
console.log(Ironman.power);
console.log(Ironman.intelligence);

console.log(Thor.name);
console.log(Thor.suitColor);
console.log(Thor.flight);

console.log(Ironman.intelligence > Thor.intelligence);

var ironman = {
      name: "Tony Stark",
      suitColor: "Red",
    }
      var thor = {
      name: "Thor Odinson",
      suitColor: "Black",
    }
      var hawkeye = {
      name: "Clint Barton",
      suitColor: "Purple",
    }
      var hulk = {
      name: "Bruce Banner",
      suitColor: "Green",
    }
      var captainAmerica = {
      name: "Steve Rogers",
      suitColor: "Blue",
    }

var heroes = [ironman, thor, hawkeye, hulk, captainAmerica];

for(var i=0;i<heroes.length;i++){
  console.log(heroes[i].name);
  console.log(heroes[i].suitColor);
}
*/

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