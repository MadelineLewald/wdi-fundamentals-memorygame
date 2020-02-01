
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1])	{
		alert("you found a match");  
	} else {
		alert("sorry, try again");
	}
};

function flipCard(cardId) {
console.log("Up and running!");

console.log("User flipped" + " " + cards[cardId]);

cardsInPlay.push(cards[cardId]);

if (cardsInPlay.length === 2) {
	checkForMatch();
}

};

flipCard(0);
console.log(cardsInPlay);
flipCard(2);