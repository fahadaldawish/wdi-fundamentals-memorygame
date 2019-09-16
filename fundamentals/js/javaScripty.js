console.log("Up and running!");
const cards = [
    {
        rank : "queen",
        suit : 'diamond',
        cardImage :"images/queen-of-diamonds.png"
    },
    {
        rank : 'queen',
        suit : 'hearts',
        cardImage : "images/queen-of-hearts.png"
    },
    {
        rank : 'king',
        suit : 'diamond',
        cardImage : "images/king-of-diamonds.png"
    },
    {
        rank : 'king',
        suit : 'hearts',
        cardImage :"images/king-of-hearts.png"
    }

];

const cardsInPlay = [];


function checkForMatch() {            // to check if the two flipped cards are both queens or kings or none
    if (cardsInPlay[0] === cardsInPlay[1]){
        console.log('congrats, you found a match');
    }
    else{
        console.log("sorry, try again");
    }
}


function flipCard(){        // to flip the two crads and add it to the cardsInPlay array
    var cardID = this.getAttribute('data-id')

    console.log("user flipped "+cards[cardID].rank);
    console.log("user flipped "+cards[cardID].suit);
    console.log("user flipped "+cards[cardID].cardImage);
    cardsInPlay.push(cards[cardID].rank);

    this.setAttribute('src', cards[cardID].cardImage);

    if (cardsInPlay.length === 2) { // after flipping two cards this line ckecks the match
        checkForMatch()
    }
}


const createBoard = function(){  //we allow the user to flip the cards depending on where he clicked
    for (var i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute("src" , 'images/back.png');
        cardElement.setAttribute('data-id' , i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}


createBoard();
