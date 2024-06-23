//function makebubble(){
//     var container = "";
// for (var i = 0; i < 500; i++) {
//     var num   =   Math.floor(Math.random()*100);
//     var red   =   Math.floor(Math.random()*256);
//     var green =   Math.floor(Math.random()*256);
//     var blue  =   Math.floor(Math.random()*256);
//     container += `<div style = " background-color : rgb(${red}, ${blue}, ${green})  " class="circle w-20 h-20 rounded-full  flex gap-2 justify-center items-center ">${num}</div>`;
// }
// var bubbles = document.querySelector(".bubble");
// bubbles.innerHTML = container;
// }

// makebubble(); // 
// setInterval(function(){
//     makebubble();

// } ,1000);

// doosara tarikaaaaa
// insert elemment se koi sa bhi imaginaray element bana skte aur woh element ko inner html se add nhi karte paarntChild() se krte;
//pichel tariqe mein saare bubble pe event listener nhi laga skte

for (var i = 0; i < 50; i++) {
    var bubble = document.createElement("div");
    bubble.textContent = Math.floor(Math.random()*100);
    bubble.classList.add("H")
    
}





