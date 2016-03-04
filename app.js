console.log("JS Loaded");

var pickedTrivia;
var music;
var animals;
var history;
var selector;


var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("X tile clicked");
  selector = "music";
  selectTrivia();

})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("Y tile clicked");
  selector = "animal";

})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  tileFade();
  countDownDelay();
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
var question = document.createElement("h1");
question.setAttribute("id", "questionText");
// var playerInput = document.createElement("input");           // INPUT FIELD
// playerInput.setAttribute("id", "player-input");            // INPUT FIELD
// playerInput.setAttribute("placeholder", "answer dammit") // INPUT FIELD



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
}, 150);
}

function removeOpeningDivs(){
  siteWrapperDiv.innerHTML = "";
  // siteWrapperDiv.style.display = "none";
  console.log("cleaning shit up yo");
  // siteWrapperDiv.remove();
}




function startGame(){
  console.log("Start game");
  var content1 = document.createElement("div");
  content1.setAttribute("id", "content1");
  siteWrapperDiv.appendChild(content1);

  // var question = document.createElement("h1");
  // question.setAttribute("id", "questionText");
  question.innerText = trivia[selector].questions[0];
  content1.appendChild(question);
  content1.appendChild(playerInput);
  // if(pickedTrivia === xtile){
  //   console.log("xtile bitch");

  // }
}

//
//   if(pickedTrivia === xtile){
//      selector = "music";
//   }if(pickedTrivia === ytile){
//      selector = "animal";
//   } else{
//      selector = "history";
//   }
// }

function selectTrivia(){
  // if(selector = "music"){
  //   console.log("inside selecttrivia");
  //   question.innerText = "Got It"
  // }
  //

  console.log(trivia[selector].questions);
}



// trivia[selector][1]


// element.classList.remove()
