const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');
const expect = chai.expect;

describe("Game", function() {

  it("should keep track of the current round", function() {
    const game = new Game();
    
    expect(game).to.have.nested.property("currentRound");
  });

  it("should have a method that creates cards, ", function() {
    const game = new Game();
    
    game.start();

    //create cards
    //put cards in deck
    //create round

  });

  // it("should have a method that creates cards, ", function() {
  //   const game = new Game();
    
  //   invoke printMessage

  // });

  // it("should have a method that creates cards, ", function() {
  //   const game = new Game();
    
  //   invoke printQuestion()

  // });

});









