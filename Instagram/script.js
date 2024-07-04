const instagramStories = [
  {
    id: 1,
    username: "Alex",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    durationInSeconds: 5,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 2,
    username: "Jenny",
    imageUrl:
      "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    durationInSeconds: 3,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 3,
    username: "Bob",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    durationInSeconds: 6,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 4,
    username: "Carl",
    imageUrl:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    durationInSeconds: 7,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 5,
    username: "Amelia",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    durationInSeconds: 2,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 6,
    username: "John",
    imageUrl:
      "https://images.unsplash.com/photo-1621388987304-e23cef5f36de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    durationInSeconds: 8,
    isLive: false,
    isHighlighted: true,
  },
  {
    id: 7,
    username: "Emma",
    imageUrl:
      "https://images.unsplash.com/photo-1627215635153-9a450b0e0d00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
    durationInSeconds: 7,
    isLive: false,
    isHighlighted: true,
  },
];

var stories = document.querySelector(".stories");
function display() {
  instagramStories.forEach(function (obj) {
    stories.innerHTML += `<div class="container">
                        <div class="story" id = "${obj.id}">
                        <div class="border">
                            <img src="${obj.imageUrl}" alt="">
                        </div>
                        </div>
                        <h1>${obj.username}</h1>
                    </div>`;
  });
}
display();
var screen1 = document.querySelector(".screen1");
var screen2 = document.querySelector(".screen2");
var timer;
var i;
document.querySelector(".stories").addEventListener("click", function (event) {
  if (event.target.closest(".story")) {
    screen1.style.display = "none";
    screen2.style.display = "block";
    i = Number(event.target.closest(".story").id);
    
    displayStory(i);
   
  }
});

function displayStory(i) {
  var image = document.querySelector(".screen2 img");
    var prog = document.querySelector(".screen2 .progress");
  prog.style.width = "0%";
  prog.style.transition = `all ${ instagramStories[i - 1].durationInSeconds }s linear`;
  setTimeout(function () {
    prog.style.width = "100%";
      // width ko timeout deke badna hai kyuki
     // browser ko transiition process krne ke lie time chahiye seedha 100% width kr denge toh
    //transition execute hee nhi hoga
  }, 1);

  image.setAttribute("src", instagramStories[i - 1].imageUrl);
  document.querySelector(".screen2  h2").innerHTML = instagramStories[i - 1].username;

  timer = setTimeout(function () {
    screen2.style.display = "none";
    screen1.style.display = "block";
  }, instagramStories[i - 1].durationInSeconds * 1000);


  document.addEventListener("keydown", function (eve) {
    console.log(eve.keyCode);
    if (eve.keyCode == 27) {
      clearTimeout(timer); // clear time out se time ke andar ke cheeze bhi nhi chlti
      screen2.style.display = "none";
      screen1.style.display = "block";
    }
  });
}



const instagramPosts = [
  {
      likes: 150,
      caption: "Sunset at the beach",
      userName: "Emily Johnson",
      imageLink: "https://example.com/emily_johnson.jpg"
  },
  {
      likes: 230,
      caption: "Hiking adventure",
      userName: "Michael Smith",
      imageLink: "https://example.com/michael_smith.jpg"
  },
  {
      likes: 320,
      caption: "Delicious breakfast",
      userName: "Sarah Brown",
      imageLink: "https://example.com/sarah_brown.jpg"
  },
  {
      likes: 400,
      caption: "City skyline",
      userName: "Daniel Davis",
      imageLink: "https://example.com/daniel_davis.jpg"
  },
  {
      likes: 180,
      caption: "Morning coffee",
      userName: "Jessica Wilson",
      imageLink: "https://example.com/jessica_wilson.jpg"
  }
];
