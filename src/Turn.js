class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  };

  returnGuess = () => this.guess;

  returnCard = () => this.card;

  evaluateGuess = () => (this.card.correctAnswer === this.guess);
  
  giveFeedback = () => this.card.correctAnswer === this.guess ? "correct!" : "incorrect!";
};

module.exports = Turn;