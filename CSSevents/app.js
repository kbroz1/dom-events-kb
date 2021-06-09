// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.

//this variable will define how fast the cat moves across the page when you click start
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}

// #1
function onStartClick() {
    startCatWalk();
}
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);

// #2
function onStopClick() {
   window.clearInterval(catTimer);
}
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);

// #3
function onSpeedClick() {
    movePixels += 5;
    var speed = movePixels * (1000/50);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);


