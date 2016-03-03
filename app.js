console.log("JS Loaded");

var xtile = document.querySelector('#x-img'); //clickable tile.  Should be able to
xtile.addEventListener('click', function(){   // add a style to make tiles fade away.
  tileFade();
  countDownDelay;
  console.log("X tile clicked");
})

var ytile = document.querySelector('#y-img'); //clickable tile
ytile.addEventListener('click', function(){  // add a style to make tiles fade away.
  tileFade();
  countDownDelay;
  console.log("Y tile clicked");
})

var ztile = document.querySelector('#z-img'); //clickable tile
ztile.addEventListener('click', function(){  // add a style to make tile fade away.
  tileFade();
  countDownDelay;
  console.log("Z tile clicked");
})

var siteWrapperDiv = document.querySelector("site-wrapper");

// console.log(siteWrapperDiv);

function tileFade(){
  xtile.classList.toggle('hidden');
  ytile.classList.toggle('hidden');
  ztile.classList.toggle('hidden');
}



var countDownDelay = setInterval(function(){
   console.log("dlayed")
   var countDownDiv = document.createElement('div');
   document.body.appendChild(countDownDiv);
   countDownDiv.innerText = "hello"
   countDownDiv.setAttribute("style", "width: 300px; height: 300px; background: red"  )
   clearInterval(countDownDelay);
}, 3000)
