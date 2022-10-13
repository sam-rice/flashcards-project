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
    this.currentCard = this.deck.cards[this.turnCount];
    return this.currentTurn.giveFeedback();
  };

  recordStartTime = () => this.startTime = Date.now();

  calculatePercentCorrect = () => ((this.turnCount - this.incorrectGuesses.length) / this.turnCount) * 100;

  endRound = () => {
    let gameLength = (Date.now() - this.startTime)
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly in ${this.convertToMinSec(gameLength)}!`);
  };

  convertToMinSec = millis => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
};

module.exports = Round;