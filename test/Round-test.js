const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe("Round", function() {

  it("should be instantiated with a deck and a current card", function() {
    let card1 = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let card2 = new Card(2, "What year was the Gibson Les Paul released?", ["1951", "1952", "1958", "1963"], "1952");
    let card3 = new Card(3, "What year was the Epiphone Sheraton released?", ["1951", "1966", "1958", "1959"], "1959");
    let card4 = new Card(4, "What year was the Fender Precision Bass released?", ["1950", "1963", "1958", "1951"], "1951");
    let deck = new Deck([card1, card2, card3, card4]);
    let round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCard).to.deep.equal(card1);
  });

  it("should have a method that returns the current card being played", function() {
    let card1 = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let card2 = new Card(2, "What year was the Gibson Les Paul released?", ["1951", "1952", "1958", "1963"], "1952");
    let card3 = new Card(3, "What year was the Epiphone Sheraton released?", ["1951", "1966", "1958", "1959"], "1959");
    let card4 = new Card(4, "What year was the Fender Precision Bass released?", ["1950", "1963", "1958", "1951"], "1951");
    let deck = new Deck([card1, card2, card3, card4]);
    let round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  });

  it("should have a method that creates a new instance of Turn, updates the turn count, adds incorrect answers to an incorrectGuesses property, and returns feedback on guess", function() {
    let card1 = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let card2 = new Card(2, "What year was the Gibson Les Paul released?", ["1951", "1952", "1958", "1963"], "1952");
    let card3 = new Card(3, "What year was the Epiphone Sheraton released?", ["1951", "1966", "1958", "1959"], "1959");
    let card4 = new Card(4, "What year was the Fender Precision Bass released?", ["1950", "1963", "1958", "1951"], "1951");
    let deck = new Deck([card1, card2, card3, card4]);
    let round = new Round(deck);

    expect(round.takeTurn("1958")).to.equal("correct!")
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
    expect(round.turnCount).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);

    expect(round.takeTurn("1963")).to.equal("incorrect!");
    expect(round.turnCount).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal(["1963"]);
  });

  it("should have a method that calculates and returns the percentage of correct guesses", function() {
    let card1 = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let card2 = new Card(2, "What year was the Gibson Les Paul released?", ["1951", "1952", "1958", "1963"], "1952");
    let card3 = new Card(3, "What year was the Epiphone Sheraton released?", ["1951", "1966", "1958", "1959"], "1959");
    let card4 = new Card(4, "What year was the Fender Precision Bass released?", ["1950", "1963", "1958", "1951"], "1951");
    let deck = new Deck([card1, card2, card3, card4]);
    let round = new Round(deck);

    round.takeTurn("1951");
    expect(round.calculatePercentCorrect()).to.equal(0);
    round.takeTurn("1952");
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn("1966");
    round.takeTurn("1950");
    expect(round.calculatePercentCorrect()).to.equal(25);
  });

});