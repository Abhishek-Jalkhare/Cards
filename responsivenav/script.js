var menu = document.querySelector(".menu");
var topel = document.querySelector(".top");
var heading = document.querySelector(".heading");
var close = document.querySelector(".close");
menu.addEventListener("click", function () {
  console.log("oi");
  topel.style.top = "0%";
  heading.style.color = "black";
});
close.addEventListener("click", function () {
  topel.style.top = "-40%";
  heading.style.color = "white";
});
