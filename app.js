console.log("JS Loaded");

var pickedTrivia;
var music;
var animals;
var history;
var selector;
var removed;


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
// var playerInput = document.createElement("input");           // INPUT FIELD
// playerInput.setAttribute("id", "player-input");            // INPUT FIELD
// playerInput.setAttribute("placeholder", "answer dammit") // INPUT FIELD

// var createButtons(){
//
// }



function tileFade(){
  xtile.classList.toggle('hidden');
  ytile.classList.toggle('hidden');
  ztile.classList.toggle('hidden');
}


function countDownDelay(){
   var delay = setInterval(function(){
   console.log("dlayed")
   console.log(startTiles);
  //  siteWrapperDiv.remove(startTiles);
  siteWrapperDiv.innerHTML = "";
  //  var countDownDiv = document.createElement('div');
  //  document.body.appendChild(countDownDiv);
  //  countDownDiv.appendChild(counterDiv);
  //  counterDiv.innerText = count;
  //  countDownDiv.setAttribute("style", "width: 100%; height: 100vh; background: yellow; margin: 0; position:relative; \
  //  display:flex; flex-direction:row; justify-content:space-around;");
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
  // siteWrapperDiv.style.display = "none";
  console.log("cleaning shit up");
  // siteWrapperDiv.remove();
}

function appendButtons(){
  content1.appendChild(choicesDiv);
  choicesDiv.appendChild(correctChoice);
  var pCorrectChoice = document.createElement("p");
  correctChoice.appendChild(pCorrectChoice);
  choicesDiv.appendChild(wrongChoice1);
  choicesDiv.appendChild(wrongChoice2);
  pCorrectChoice.innerText = trivia[selector].answers[0];

}



function startGame(){
  console.log("Start game");
  var content1 = document.createElement("div");
  content1.setAttribute("id", "content1");
  siteWrapperDiv.appendChild(content1);
  question.innerText = trivia[selector].questions[0];
  content1.appendChild(question);
  appendButtons();
  wrongChoice1.innerText = wrongRemoved1;
  wrongChoice2.innerText = wrongRemoved2;

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

function randomWrongAnswers(){
console.log("inside random answers");
 shuffle(trivia[selector].wrongAnswers);
 removed = trivia[selector].wrongAnswers.splice(0, 2);
 wrongRemoved1 = removed[0];
 wrongRemoved2 = removed[1];
 return wrongRemoved1;
 return wrongRemoved2;
}

function selectTriviaAnswers(){


  // console.log(trivia[selector].questions);
}



// trivia[selector][1]


// element.classList.remove()
