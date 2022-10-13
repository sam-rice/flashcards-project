const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe("Game", function() {

  it("should have a method that starts a new game by creating new Cards, creating a new Deck, creating a new Round, and keeping track of the current Round", function() {
    const game = new Game();

    game.start();
    
    expect(game).to.have.nested.property("currentRound");
    expect(game.currentRound).to.be.an.instanceOf(Round);
    expect(game.currentRound.deck).to.be.an.instanceOf(Deck);
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceOf(Card);
  });
});









