const dataArray = [
  {
    name: "Alice",
    imageAddress:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "",
  },
  {
    name: "Bob",
    imageAddress:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "",
  },
  {
    name: "Charlie",
    imageAddress:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "",
  },
];
var cards = document.querySelector(".cards");
dataArray.forEach((element) => {
  cards.innerHTML += `<div class="card h-full w-[243px] bg-zinc-800 rounded-lg p-5 flex flex-col items-center justify-center  strangers ">
                <div class="img h-[120px] w-[120px] rounded-full bg-white overflow-hidden "><img src="${element.imageAddress}" alt="" class=" object-cover"></div>
                <div class="name text-white text-2xl mt-[10px]">${element.name}</div>
                <button class="button rounded-full mt-[20px] px-[15px] py-[10px] bg-blue-800 text-white active:scale-90 transition-all ease-[cubic-bezier(0.19, 1, 0.22, 1)] duration-300 " >Add Friend </button>
            </div>`;
});
var main = document.querySelector(".main")
main.addEventListener("click" , function(event){
  var timeout;
  if( event.target.closest(".button") && event.target.closest(".strangers") ){//The closest method in JavaScript is used to traverse up the DOM tree to find the nearest ancestor (including the element itself) that matches a given CSS selector.
    event.target.innerHTML = "Request Sent";
    var card = event.target.closest(".strangers");
    card.classList.add("reqsent");
    card.classList.remove("strangers");
    timeout = setTimeout(function(){
    card.classList.add("friends");
    card.classList.remove("reqsent");
    event.target.classList.add("bg-red-600");
    event.target.classList.remove("bg-blue-800");
    event.target.innerHTML = "Remove Friend";
    },4000)  
  }
   else if( event.target.closest(".button") && event.target.closest(".friends") ){//The closest method in JavaScript is used to traverse up the DOM tree to find the nearest ancestor (including the element itself) that matches a given CSS selector.
     event.target.innerHTML = "Add Friend";
     event.target.classList.add("bg-blue-800");
     event.target.classList.remove("bg-red-600");
     var card = event.target.closest(".friends")
     card.classList.add("strangers");
     card.classList.remove("friends");
   }
   else if( event.target.closest(".button") && event.target.closest(".reqsent") ){//The closest method in JavaScript is used to traverse up the DOM tree to find the nearest ancestor (including the element itself) that matches a given CSS selector.
    event.target.innerHTML = "Add Friend";
    event.target.classList.add("bg-blue-800");
    event.target.classList.remove("bg-red-600");
    var card = event.target.closest(".reqsent") 
    card.classList.add("strangers");
    card.classList.remove("reqsent"); 
    clearTimeout(timeout);
  }
})

//mix blend mode diffrence
//background - linear gradient (red ,blue)
// background-clip : text