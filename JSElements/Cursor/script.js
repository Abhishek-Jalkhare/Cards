 var body = document.querySelector("body");
 var cursor = document.querySelector(".cursor");
 var h1 = document.querySelector(".h1")
 body.addEventListener("mousemove", function(event) {
 console.log(event);
 cursor.style.top = event.y +"px"
 cursor.style.left = event.x +"px"
 })
 h1.addEventListener("mousemove",function(event){
    cursor.style.scale = "3";
}) 
h1.addEventListener("mouseleave" , function () {
    cursor.style.scale = "1";
})
