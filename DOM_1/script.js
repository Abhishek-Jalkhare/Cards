// DOM document object model
var main = document.querySelector(".main");
main.innerHTML =  `<div class="sec h-[100px] w-[100px] bg-blue-100"></div>`; // identation wala div ko backtick mein likhte
//h1.innerHTML = "<i>hey</i>";
h1.addEventListener("click",function(det){
    if(h1.style.color === "black")
        h1.style.color = "blue";
    else{
        h1.style.color = "black"; 
    }
})