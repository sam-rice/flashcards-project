const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const data = require('../src/test-data');

describe("Turn", function() {
  let card, turn, correctTurn, incorrectTurn;

  this.beforeEach(() => {
    card = new Card(data.prototypeData[0]);
    turn = new Turn("1958", card);
    correctTurn = new Turn("1958", card);
    incorrectTurn = new Turn("1951", card);
  });

  it("should be an instance of Turn", function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should be instantiated with a guess and a Card", function() {
    expect(turn.guess).to.equal("1958");
    expect(turn.card).to.deep.equal(card);
  })

  it("should have a method that returns the guess", function() {
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it("should have a method that returns the Card", function() {
    expect(turn.returnCard()).to.deep.equal(turn.card);
  });

  it("should have a method that returns a boolean indicating if the user’s guess is correct", function() {
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether user's guess is correct or not", function() {
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});
