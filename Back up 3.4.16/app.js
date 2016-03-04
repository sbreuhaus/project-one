console.log("JS Loaded");

var pickedTrivia;
var lameMusic;
var animals;
var history;

var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("X tile clicked");
  pickedTrivia = xtile;
  console.log(pickedTrivia);
})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("Y tile clicked");
  pickedTrivia = ytile;
  console.log(pickedTrivia);
})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  tileFade();
  countDownDelay();
  console.log("Z tile clicked");
  pickedTrivia = ztile;
})

var gameWrapper = document.querySelector("site-wraper-game");
var siteWrapperDiv = document.querySelector("#site-wrapper-opening");
var startTiles = document.querySelectorAll(".start-col");
var counterDiv = document.createElement("div");
counterDiv.setAttribute("id", "count-in");
var siteWrapperGame = document.createElement("div");
siteWrapperGame.setAttribute("id", "site-wrapper-game");
var body = document.querySelector('body');

//counterDiv.setAttribute("style", "width: 300px; height: 500px; background: blue; margin: 0; top: 200px;");
// countDownDiv.document.body.appendChild(counterDiv);


// console.log(siteWrapperDiv);

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
  console.log("cleaning shit up yo");
  // siteWrapperDiv.remove();
}




function startGame(){
  console.log("Start game");
  var content1 = document.createElement("div");
  content1.setAttribute("id", "content1");
  siteWrapperDiv.appendChild(content1);
  var question = document.createElement("h1");
  question.setAttribute("id", "questionText");
  content1.appendChild(question);
  // question.innerText = trivia[selector].questions.
  if(pickedTrivia === xtile){
    console.log("xtile bitch");

  }

}

function selectTrivia(){
  if(pickedTrivia === xtile){
     selector = "music";
  }if(pickedTrivia === ytile){
    animals = true;
  } else{
    history = true;
  }
}

trivia[selector][1]


// element.classList.remove()
