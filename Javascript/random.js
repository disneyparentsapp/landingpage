document.getElementById("carousel-image").addEventListener("click", function() {
    alert("WELCOME TO THE HAPPIEST PLACE ON EARTH");
});

// .addEventListener("mouseover", function());

let cards = document.querySelectorAll(".cards");

cards.forEach (card => {
    card.querySelector(".student").addEventListener("mouseover", function(){
        card.querySelector(".purple").style.color = "#a4d";
    })
});