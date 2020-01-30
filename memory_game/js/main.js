console.log("Up and running!");


const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];


let cardOne = cards[0];
let cardTwo = cards[2];
let cardThree = cards[1];
let cardFour = cards[3];

console.log("User flipped" + cardFour);
console.log("User flipped" + cardTwo);

cardsInPlay.push(cardTwo);

cardsInPlay.push(cardFour);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])	{
		alert("you found a match");  
	} else {
		alert("sorry, try again");
	}
}
