const cardsCar = [{
    alt:"Audi",
    img:"images/Audi.jpeg",
    id:"1"
},
{
    alt:"BMW",
    img:"images/BMW.jpeg",
    id:"2"
},
{
    alt:"Cadillac",
    img:"images/Cadillac.jpeg",
    id:"3"
},
{
    alt:"Honda",
    img:"images/Honda.jpeg",
    id:"4"
},
{
    alt:"mercedes",
    img:"images/mercedes.jpeg",
    id:"5"
},
{
    alt:"Toyota",
    img:"images/Toyota.jpeg",
    id:"6"
},
{
    alt:"Audi",
    img:"images/Audi.jpeg",
    id:"1"
},
{
    alt:"BMW",
    img:"images/BMW.jpeg",
    id:"2"
},
{
    alt:"Cadillac",
    img:"images/Cadillac.jpeg",
    id:"3"
},
{
    alt:"Honda",
    img:"images/Honda.jpeg",
    id:"4"
},
{
    alt:"mercedes",
    img:"images/mercedes.jpeg",
    id:"5"
},
{
    alt:"Toyota",
    img:"images/Toyota.jpeg",
    id:"6"
}]




var startButton = document.querySelector(".start")
var main = document.querySelector(".main");
var gameBoard = document.querySelector(".board");
var timer = null;
var cardsFlipped = document.getElementById("clickCount");
var clicker = 0
var matches = document.getElementById("matches");
var matchCount = 0;
var cardCheck = []
var matchesFound = []
var checking = false
var cardTable = "";

startGame()

function startGame(){
    createHTML()
  startButton.addEventListener("click",start)
  
}
var allCards = document.querySelectorAll(".card")



function createHTML(){
      cardsCar.sort(()=> 0.5 - Math.random())
     cardTable = ""
     cardsCar.forEach(function (cards, i){
         var i = i + 1;
         cardTable = `<div class="card" id="${cards.id}">
         <img class="back" src="images/cardback.jpg">
         <img class="front"  src="${cards.img}" alt="${cards.alt}">
         </div>`
         gameBoard.innerHTML += cardTable
 
     })

}

function start() {
    startButton.style.display = "none";

allCards.forEach(card=>{
   card.addEventListener("click",flipCard);
   console.log(card)
    if(cardCheck.length >= 2){
        card.removeEventListener("click",flipCard)
    }
   
})
}



function flipCard(){
   // this.style.animation = "flip 500ms ease-in-out";
   clicker++
   cardsFlipped.innerText = clicker
    this.classList.add('show')
    cardCheck.push(this)
    console.log(this)
    if(cardCheck.length === 2){
        setTimeout(matchChecker,700)
}



 //check for a match
 function matchChecker() {
     
     if (cardCheck[0].id === cardCheck[1].id){
     alert("you have found a match")
     foundAMatch()
        matchesFound.push(cardCheck[0])
        cardCheck = []
        
        gameOver()
    }
     else{
        notAMatch()
         cardCheck =[]
        }
         //this.style.display ="block"
     }
 }


 //when a Match is found
function foundAMatch() {
    if (cardCheck[0].id === cardCheck[1].id){
        matchCount++
        matches.innerText = matchCount
       cardCheck[0].classList.add("found");
       cardCheck[1].classList.add("found");
    }
}

// if the cards dont Match
 function notAMatch() {
     if(cardCheck[0].id !== cardCheck[1].id){
         cardCheck[0].classList.remove('show');
         cardCheck[1].classList.remove('show');
}
 }

 function gameOver(){
     if(allCards.length/2 === matchesFound.length){
        return alert("you have found all the cards")
     }
 } 