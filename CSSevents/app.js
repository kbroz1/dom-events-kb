// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
// Add an event listener to the stop button, so that the cat stops moving when clicked.
// Add an event listener to the speed button, so that the cat moves faster when it's clicked.

//this variable will define how fast the cat moves across the page when you click start
//this variable defines how many pixels the cat will move once we click start:
//everytime you click the button, it will increase by 10
var movePixels = 10; 
var delayMs = 50;
//this variable will calculate how fast the cat is going. It is set to null for now because there is no value when you load 
//the page (since he is not moving yet until you click on the button)
var catTimer = null;
function catWalk() {
  //when you use getElementsByTagName - you always need to add the [0] even if there is only one of those tags on the page
  var img = document.getElementsByTagName('img')[0];
  //tells the variable where to start
  //parseInt takes all of the values inside of it and adds it into a string and turns it to a number
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  //if the cat reaches the end of the page, style it back to 0 pixels from the left
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
//this function starts the timer and tracks the speed 
function onStopClick() {
  //clears the cat timer and starts it back at 0
   window.clearInterval(catTimer);
}

//stop button functionality: 
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);

// #3
//speed functionality
function onSpeedClick() {
  //telling the movePixels variable to increase by 10
    movePixels += 2;
    //when measuringi speed, you have to use 1000/x (1000/50 or 1000/20 or 1000/5)
    var speed = movePixels * (1000/20);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);


