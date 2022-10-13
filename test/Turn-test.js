const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/data');

describe("Turn", function() {

  it("should be an instance of Turn", function() {
    let turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should be instantiated with a guess and a Card", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("array", card);
    
    expect(turn.guess).to.equal("array");
    expect(turn.card).to.deep.equal(card);
  })

  it("should have a method that returns the guess", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("array", card);
    
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it("should have a method that returns the Card", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("array", card);
    
    expect(turn.returnCard()).to.deep.equal(turn.card);
  });

  it("should have a method that returns a boolean indicating if the user’s guess is correct", function() {
    let card = new Card(data.prototypeData[0]);
    let correctTurn = new Turn("object", card);
    let incorrectTurn = new Turn("array", card);
    
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether user's guess is correct or not", function() {
    let card = new Card(data.prototypeData[0]);
    let correctTurn = new Turn("object", card);
    let incorrectTurn = new Turn("array", card);
    
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});
