const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {}

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  };

  printQuestion(round) {
      util.main(round);
  };

  start() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.currentRound.recordStartTime();
  };
};



module.exports = Game;