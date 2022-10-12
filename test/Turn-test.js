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

  it("should be instantiated with two arguments", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("1958", card);
    
    expect(turn.guess).to.equal("1958");
    expect(turn.card).to.deep.equal(card);
  })

  it("should have a method that returns the guess", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("1958", card);
    
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it("should have a method that returns the card", function() {
    let card = new Card(data.prototypeData[0]);
    let turn = new Turn("1958", card);
    
    expect(turn.returnCard()).to.deep.equal(turn.card);
  });

  it("should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card", function() {
    let card = new Card(data.prototypeData[0]);
    let correctTurn = new Turn("object", card);
    let incorrectTurn = new Turn("array", card);
    
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not", function() {
    let card = new Card(data.prototypeData[0]);
    let correctTurn = new Turn("object", card);
    let incorrectTurn = new Turn("array", card);
    
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});
