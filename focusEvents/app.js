// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.



const color = document.getElementById('myForm');
 //event type, functiion that will be execusted, true or false (says whenever the user is clicked in the box)
color.addEventListener('focus', myFocusFunction, true); 
// //focus is when you are on the element, blur is when click away from the element
color.addEventListener('blur', myBlurFunction, true);
function myFocusFunction(){
    document.getElementById('text').style.backgroundColor="skyBlue";
}
function myBlurFunction(){
    document.getElementById('text').style.backgroundColor="black";
}