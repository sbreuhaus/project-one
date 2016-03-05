console.log("JS Loaded");

var trivia;
var pickedTrivia;
var music;
var animals;
var history;
var selector;
var removed;
var correctAnswerPull;

var gameWrapper = document.querySelector("site-wraper-game");
var siteWrapperDiv = document.querySelector("#site-wrapper-opening");
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
pCorrectChoice.setAttribute("id", "answer-text");
var pWrongChoice1 = document.createElement("p");
pWrongChoice1.setAttribute("id", "answer-text");
var pWrongChoice2 = document.createElement("p");
pWrongChoice2.setAttribute("id", "answer-text");
// var playerInput = document.createElement("input");           // INPUT FIELD
// playerInput.setAttribute("id", "player-input");            // INPUT FIELD
// playerInput.setAttribute("placeholder", "answer dammit") // INPUT FIELD

// var createButtons(){
//
// }

var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("X tile clicked");
  selector = "music";
  // selectTrivia();
  randomWrongAnswers();

})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  randomWrongAnswers();
  console.log("Y tile clicked");
  selector = "animal";

})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  tileFade();
  countDownDelay();
  randomWrongAnswers();
  console.log("Z tile clicked");
  selector = "history";
})





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

function appendButtons(){  // appends button divs and the answers to them
  content1.appendChild(choicesDiv);
  choicesDiv.appendChild(correctChoice);
  correctChoice.appendChild(pCorrectChoice);
  choicesDiv.appendChild(wrongChoice1);
  choicesDiv.appendChild(wrongChoice2);
  wrongChoice1.appendChild(pWrongChoice1);
  wrongChoice2.appendChild(pWrongChoice2);
  // pCorrectChoice.innerText = trivia[selector].answers[0];
  // pWrongChoice1.innerText = wrongRemoved1;
  // pWrongChoice2.innerText = wrongRemoved2;

}



function startGame(){
  console.log("Start game");
  var content1 = document.createElement("div");
  content1.setAttribute("id", "content1");
  siteWrapperDiv.appendChild(content1);
  // question.innerText = trivia[selector].questions[0];
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
  console.log("inside random answers");
  shuffle(trivia[selector].wrongAnswers);
  removed = trivia[selector].wrongAnswers.splice(0, 2);
  wrongRemoved1 = removed[0];
  wrongRemoved2 = removed[1];
  return wrongRemoved1;
  return wrongRemoved2;
}

function randomizeAllAnswers(){ // rondomizes all 3 of the potential answers;
  // need to assign a true or false value to these answers.
  //not showing up right now//
  pullCorrectAnswer();
  var currentAnswerArr = [wrongRemoved1, wrongRemoved2, correctAnswerPull]
  shuffle(currentAnswerArr);
  console.log("randomizing");
  pCorrectChoice.innerText = currentAnswerArr[0]
  pWrongChoice1.innerText = currentAnswerArr[1]
  pWrongChoice2.innerText = currentAnswerArr[2]

}

function pullCorrectAnswer(){  //pulls out 1 correct answer.
  // for(selector in trivia){
  //
  // }
  correctAnswerPull = trivia[selector].answers.splice(0, 1);
  // correctAnswerPull = true;
  return correctAnswerPull;
  console.log("pulling");
}






























///////////////bottom
