const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0]
    this.turnCount = 0
  };
  
  returnCurrentCard = () => this.currentCard;
  takeTurn = (guess) => {
    this.currentTurn = new Turn(guess);
    this.turnCount++;
  };

};

module.exports = Round;