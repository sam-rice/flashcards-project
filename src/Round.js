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
    this.turnCount++;
    this.currentTurn = new Turn(guess, this.currentCard);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentTurn.guess);
    };
    this.currentCard = this.deck.cards[this.turnCount]
    return this.currentTurn.giveFeedback();
  };
  
  calculatePercentCorrect = () => ((this.turnCount - this.incorrectGuesses.length) / this.turnCount) * 100;

};

module.exports = Round;