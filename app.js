console.log("JS Loaded");

var trivia;
var pickedTrivia;
var music;
var animals;
var history;
var selector;
var removed;
var correctAnswerPull;
var currentAnswerArr = [];
var indexOfCorrect;
var pTagText = [];
var answerOne;
var answerTwo;
var answerThree;
var shuffledAnswers;
var pulledAnswers = [];
var pulledQuestions = [];
var score = 0;

var gameWrapper = document.querySelector("site-wraper-game");
var siteWrapperDiv = document.querySelector(".site-wrapper-opening");
var startTiles = document.querySelectorAll(".start-col");
var counterDiv = document.createElement("div");
counterDiv.setAttribute("id", "count-in");
var siteWrapperGame = document.createElement("div");
siteWrapperGame.setAttribute("id", "site-wrapper-game");
var body = document.querySelector('body');
var question = document.createElement("h1"); // questions text div
question.setAttribute("id", "questionText");
var choicesDiv = document.createElement("div"); // div to store the three choices
choicesDiv.setAttribute("id", "choices-div");
var correctChoice = document.createElement("button"); //button for the answer[i]
correctChoice.setAttribute("class", "choice-button wobble")
var wrongChoice1 = document.createElement("button"); // wrong answer 1
wrongChoice1.setAttribute("class", "choice-button wobble");
var wrongChoice2 = document.createElement("button"); //wrong answer 2
wrongChoice2.setAttribute("class", "choice-button wobble");
var pCorrectChoice = document.createElement("p");
pCorrectChoice.setAttribute("class", "answer-text");
pCorrectChoice.setAttribute("id", "correct-choice-text");
var pWrongChoice1 = document.createElement("p");
pWrongChoice1.setAttribute("class", "answer-text");
pWrongChoice1.setAttribute("id", "wrong1-choice-text");
var pWrongChoice2 = document.createElement("p");
pWrongChoice2.setAttribute("class", "answer-text");
pWrongChoice2.setAttribute("id", "wrong2-choice-text");
// var playerInput = document.createElement("input");           // INPUT FIELD
// playerInput.setAttribute("id", "player-input");            // INPUT FIELD
// playerInput.setAttribute("placeholder", "answer dammit") // INPUT FIELD

// var createButtons(){
//
// }

var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  selector = "music";
  tileFade();
  countDownDelay();
  console.log("X tile clicked");
  // selectTrivia();
  // randomWrongAnswers();
  randomizeAllAnswers();

})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  selector = "animal";
  tileFade();
  countDownDelay();
  // randomWrongAnswers();
  randomizeAllAnswers();
  console.log("Y tile clicked");


})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  selector = "history";
  tileFade();
  countDownDelay();
  // randomWrongAnswers();
  randomizeAllAnswers();
  console.log("Z tile clicked");
})

pCorrectChoice.addEventListener('click', function(){

  if(pulledAnswers.indexOf(pCorrectChoice.innerText) > -1){
    playerAnsweredCorrect();
    updateScore();
    console.log("Correct Choice has been pushed");
    console.log(this);
  }else{
    playerAnsweredWrong();
    console.log("not the right choice");
  }
})

pWrongChoice1.addEventListener('click', function(){

  if(pulledAnswers.indexOf(pWrongChoice1.innerText) > -1){
    playerAnsweredCorrect();
    updateScore();
    console.log("Correct Choice has been pushed");
    console.log(this);
  }else{
    playerAnsweredWrong();
    console.log("not the right choice");
  }
})


pWrongChoice2.addEventListener('click', function(){

  if(pulledAnswers.indexOf(pWrongChoice2.innerText) > -1){

    playerAnsweredCorrect();
    updateScore();
    console.log("Correct Choice has been pushed");
    console.log(this);
  } else {
    playerAnsweredWrong();
    console.log("not the right choice");
  }
})

function playerAnsweredCorrect(){ //// Clears the questiontext and pulls the next one after 1 sec.
    choicesDiv.innerHTML = "";
    if(pulledAnswers.length === 5){
      console.log("END THE GAME");
      siteWrapperDiv.removeChild(content1);
      siteWrapperDiv.classList.remove("site-wrapper-opening");
      siteWrapperDiv.classList.add("site-wrapper-end-game");
      var gameOverScore = document.createElement("h1");
      gameOverScore.setAttribute("id", "game-over");
      siteWrapperDiv.appendChild(gameOverScore)
      gameOverScore.innerText = "Game Over! You got " + score + " out of 5!"
    }else{
    var nextQuestion = setInterval(function(){
    question.innerText = trivia[selector].questions.splice(0, 1);
    console.log("about to show next question");
    randomizeAllAnswers();
    appendButtons();
    if(question.innerText != ""){
      clearInterval(nextQuestion);
    }
  }, 1000)
 }
}


function playerAnsweredWrong(){
  choicesDiv.innerHTML = "";
  question.innerText = "Ummm....No."
  if(pulledAnswers.length === 5){
    console.log("END THE GAME");
    siteWrapperDiv.removeChild(content1);
    siteWrapperDiv.classList.remove("site-wrapper-opening");
    siteWrapperDiv.classList.add("site-wrapper-end-game");
    var gameOverScore = document.createElement("h1");
    gameOverScore.setAttribute("id", "game-over");
    siteWrapperDiv.appendChild(gameOverScore)
    gameOverScore.innerText = "Game Over. You got " + score + " out of 5!"
  } else {
  var nextQuestion = setInterval(function(){
  question.innerText = trivia[selector].questions.splice(0, 1);
  console.log("about to show next question");
  randomizeAllAnswers();
  appendButtons();
  if(question.innerText != ""){
    clearInterval(nextQuestion);
  }
}, 1000)
}
}

function updateScore(){

  score++
  console.log(score);
  question.innerText = "You So SMAHT. Your score is " + score;

}

function tileFade(){
  xtile.classList.toggle('hidden');
  ytile.classList.toggle('hidden');
  ztile.classList.toggle('hidden');
}


function countDownDelay(){
   var delay = setInterval(function(){
   console.log("dlayed")
   console.log(startTiles);
   siteWrapperDiv.innerHTML = "";
   countDown();
   console.log("about to clear");
   clearInterval(delay);

 }, 1100)
}

function countDown(){
  var count = 4;
  var countDownDiv = document.createElement('div');
  var countDownNum = document.createElement('h1');
  countDownNum.setAttribute("id", "intro-count-down")
  counterDiv.appendChild(countDownNum);
  siteWrapperDiv.appendChild(countDownDiv);
  countDownDiv.appendChild(counterDiv);
  countDownDiv.setAttribute("id", "count-down-div");
  var interval  = setInterval(function(){
     count -= 1
     countDownNum.innerText = count;
     console.log(count);
    if(count === 0){
      console.log('last part of interval??');
      clearInterval(interval);
      countDownNum.innerText = "";
      removeOpeningDivs();
      startGame();

    }
}, 750);
}

function removeOpeningDivs(){
  siteWrapperDiv.innerHTML = "";
  console.log("cleaning shit up");
  // siteWrapperDiv.remove();
}



function startGame(){
  console.log("Start game");
  var content1 = document.createElement("div");
  content1.setAttribute("id", "content1");
  siteWrapperDiv.appendChild(content1);
  // question.innerText = trivia[selector].questions[0];
  question.innerText = trivia[selector].questions.splice(0, 1);
  pulledQuestions.push(question.innerText);
  content1.appendChild(question);
  appendButtons();

}

// Fisher Yates shuffle from Stack-O

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomWrongAnswers(){ // randomly pulls two wrong answers
  console.log("inside random wrong answers");
  shuffle(trivia[selector].wrongAnswers);
  removed = trivia[selector].wrongAnswers.splice(0, 2);
  wrongRemoved1 = removed[0];
  wrongRemoved2 = removed[1];
  return wrongRemoved1;
  return wrongRemoved2;
}

function appendButtons(){  // appends button divs and the answers to them
  content1.appendChild(choicesDiv); /// moved this up top
  choicesDiv.appendChild(correctChoice);
  correctChoice.appendChild(pCorrectChoice); /////
  choicesDiv.appendChild(wrongChoice1);
  choicesDiv.appendChild(wrongChoice2);
  wrongChoice1.appendChild(pWrongChoice1);   /////
  wrongChoice2.appendChild(pWrongChoice2);   /////
  console.log("appending buttons");
}

function randomizeAllAnswers(){ // rondomizes all 3 of the potential answers;
  randomWrongAnswers();
  pullCorrectAnswer();
  currentAnswerArr = [wrongRemoved1, wrongRemoved2, correctAnswerPull];
  shuffle(currentAnswerArr);
  console.log("randomizing");
  pCorrectChoice.innerText = currentAnswerArr[0].toString();
  pWrongChoice1.innerText = currentAnswerArr[1].toString();
  pWrongChoice2.innerText = currentAnswerArr[2].toString();

}


function pullCorrectAnswer(){  //pulls out 1 correct answer.
  correctAnswerPull = trivia[selector].answers.splice(0, 1);
  correctAnswerPull = correctAnswerPull.toString();
  pulledAnswers.push(correctAnswerPull);
  console.log("pulling");
  return correctAnswerPull;
}






























///////////////bottom
