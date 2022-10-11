const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
    this.currentCard = this.deck.cards[this.turnCount]
    this.incorrectGuesses = []
  };
  
  returnCurrentCard = () => this.currentCard;
  takeTurn = (guess) => {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.turnCount++;
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentTurn.guess);
    };
    return this.currentTurn.giveFeedback();
  };

};

module.exports = Round;