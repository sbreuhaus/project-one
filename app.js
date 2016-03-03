console.log("JS Loaded");

var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("X tile clicked");
})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  tileFade();
  countDownDelay();
  console.log("Y tile clicked");
})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  tileFade();
  countDownDelay();
  console.log("Z tile clicked");
})

var siteWrapperDiv = document.querySelector("#site-wrapper");
var startTiles = document.querySelectorAll(".start-col");


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
  //  startTiles.classList.remove("start-col");
   siteWrapperDiv.remove(startTiles);
   var countDownDiv = document.createElement('div');
   document.body.appendChild(countDownDiv);
   countDownDiv.innerText = "";
   countDownDiv.setAttribute("style", "width: 100%; height: 100vh; background: yellow; margin: 0;");
  // countDownDiv.classList.add("#countDown-style");
   clearInterval(delay);
}, 1500)
}


// element.classList.remove()
