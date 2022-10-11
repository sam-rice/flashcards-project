const chai = require('chai');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const expect = chai.expect;

describe("Turn", function() {

  it("should be an instance of Turn", function() {
    let turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it("should be instantiated with two arguments", function() {
    let card = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let turn = new Turn("1958", card);
    
    expect(turn.guess).to.equal("1958");
    expect(turn.card).to.equal(card);
  })

  it("should have a method that returns the guess", function() {
    let card = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let turn = new Turn("1958", card);
    
    expect(turn.returnGuess()).to.equal(turn.guess);
  });

  it("should have a method that returns the card", function() {
    let card = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let turn = new Turn("1958", card);
    
    expect(turn.returnCard()).to.equal(turn.card);
  });

  it("should have a method that returns a boolean indicating if the user’s guess matches the correct answer on the card", function() {
    let card = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let correctTurn = new Turn("1958", card);
    let incorrectTurn = new Turn("1951", card);
    
    expect(correctTurn.evaluateGuess()).to.equal(true);
    expect(incorrectTurn.evaluateGuess()).to.equal(false);
  });

  it("should have a method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not", function() {
    let card = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let correctTurn = new Turn("1958", card);
    let incorrectTurn = new Turn("1951", card);
    
    expect(correctTurn.giveFeedback()).to.equal("correct!");
    expect(incorrectTurn.giveFeedback()).to.equal("incorrect!");
  });
});
