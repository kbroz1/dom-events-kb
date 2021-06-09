//Click the buttons to toggle between showing and hiding the content in collapsible.

const targetDiv = document.getElementById("content1");
const btn = document.getElementsByClassName("collapsible");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};