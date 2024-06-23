var button = document.querySelector(".button");
var text = document.querySelector(".text");
var progress = document.querySelector(".progress");
var line = document.querySelector(".line");
var growth = document.querySelector(".line .growth");

button.addEventListener("click", function () {
    if(text.textContent == "Click To Download")
        Download();
});
function reset() {
  text.textContent = "Download complete";
  setTimeout(function () {
    
   
    growth.classList.remove("w-[100%]");
    text.textContent = "Click To Download"
    button.textContent = "Download" 
  }, 2000);
}
function Download(){
    var i = 0;
    text.textContent = "Downloading....";
    progress.classList.remove("hidden");
    line.classList.remove("hidden");
    var delay = 50;
    var interval = setInterval(function () {
      i++;
      progress.textContent = i + "%";
      growth.classList.add("w-[" + i + "%]");
      growth.classList.remove("w-[" + (i - 1) + "%]");
    }, delay);
    setTimeout(function () {
      text.textContent = "Download Complete";
      progress.classList.add("hidden");
      line.classList.add("hidden");
      button.textContent = "Wait"
      //textContent.classList.add(" mb-5 ")
      clearInterval(interval);
      reset();
    }, delay * 100);
}
