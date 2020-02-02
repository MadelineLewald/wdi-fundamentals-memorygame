console.log("Up and running!");

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

function flipCard(cardElement) {
	let cardId = this.getAttribute('data-id');
	
	this.setAttribute('src', cards[cardId].cardImage); 


	console.log("User flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();


