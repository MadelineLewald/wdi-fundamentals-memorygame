
const cards = [
{
suit: "hearts",
rank: "queen",
cardImage: "images/queen-of-hearts.png"
},
{
suit: "hearts",
rank: "king",
cardImage: "images/king-of-hearts.png"
},
{
suit: "diamonds",
rank: "queen",
cardImage: "images/queen-of-diamonds.png"
},
{
suit: "diamonds",
rank: "king",
cardImage: "images/king-of-diamonds.png"
}
];

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

console.log("User flipped" + " " + cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);

if (cardsInPlay.length === 2) {
	checkForMatch();
}

};

flipCard(0);
console.log(cardsInPlay);
flipCard(2);





