var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question("What is your name? ")
console.log("Hello " + userName + " Welcome to Big Bang Theory Quiz")
console.log("------------------------------------")

var score = 0;

var quesAnsArray = [
  {
    question : "What is Sheldon's brother's name? \n a.Charlie \n b. Georgie \n c. Tommy \n ",
    answer: "b"
  },
  {
    question : "What is Penny's dumb boyfriend's name? \n a. Leonard \n b. David \n c. Zack \n ",
    answer: "c"
  },
  {
    question : "which of these people have gone to space? \n a. Howard \n b. Amy \n c. Stuart \n",
    answer: "a"
  },
  {
    question : "Which is Sheldon's favourite song? \n a. Beatles \n b. Soft kitty\n c. Jingle bells \n ",
    answer: "b"
  },
  {
    question : "Who is the writer of Big Bang Theory? \n a. Marta Kauffman \n b. Chuck Lorre \n c. David Miller \n ",
    answer: "b"
  },
]


function play(question, answer){
  var userAnswer = readlineSync.question(question)
    if(userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log(chalk.blue("Bazinga!!! You are right"));
      score = score + 1;
    }else{
      console.log(chalk.red("Oh no!!! You are wrong"));
    }

    console.log(chalk.green("Your score is : " + score));
    console.log(chalk.magenta("------------------------------------"));
}

for(i=0; i< quesAnsArray.length; i++){
  var currentQuestion = quesAnsArray[i]
  play(currentQuestion.question, currentQuestion.answer)
}

var highScores = [
  {
    name: "aravind",
    score: 5
  },
  {
    name: "akash",
    score: 4
  }
]



function compareHighscores(){
  if(score >= highScores[0].score){
    console.log("Congratulations!! you made it to the score board!");
    console.log("Your Ranking is 1")
  }else if(score == highScores[1].score){
    console.log("Congratulations!! you made it to the score board!");
    console.log("Your Ranking is 2")
  }else{
    console.log("Uh oh! you did not make it to the high score, try again!")
  }
}

for(i=0; i<highScores.length; i++){
  console.log("current high score: " ,highScores[i]);
  compareHighscores();
}