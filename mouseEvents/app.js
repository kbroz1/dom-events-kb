// Use an addEventListener
//  to attach a "mouseover" and "mouseout" event to a h3 element.
//The h3 should change size when mouseovered

//on mouse over, changes h3 to 80px
var mouseOver = document.getElementById("mouseDiv");
mouseOver.onmouseover = function mOver(){
  mouseOver.style.fontSize = "80px";
}

//on mouse out, changes h3 to 50px
var mouseOut= document.getElementById("mouseDiv");
mouseOut.onmouseout= function mOut(){
  mouseOut.style.fontSize = "50px";
}


//Part II
// Use an addEventListener
//  to attach a "mouseover" and "mouseout" element that asks 
// and answers a trivia question

var mouseOverTrivia = document.getElementById("mouseDiv");
mouseOverTrivia.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.innerHTML= "What is the capital of Colorado?";
  
    
  }, true);

  var mouseOutTrivia = document.getElementById("mouseDiv");
mouseOutTrivia.addEventListener("mouseout", function( event ) {
    event.target.innerHTML= "Denver, Colorado";
  
    
  }, true);
  
  


