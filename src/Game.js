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
    let card1 = new Card(data.prototypeData[0]);
    let card2 = new Card(data.prototypeData[1]);
    let card3 = new Card(data.prototypeData[2]);
    let card4 = new Card(data.prototypeData[3]);

    let deck = new Deck([card1, card2, card3, card4]);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  };

};



module.exports = Game;