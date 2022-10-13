const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const data = require('../src/data');

describe("Round", function() {

  it("should be instantiated with a deck and a current card", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);

    expect(round.deck).to.deep.equal(deck);
    expect(round.currentCard).to.deep.equal(cards[0]);
  });

  it("should have a method that returns the current card being played", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);

    expect(round.returnCurrentCard()).to.deep.equal(round.currentCard);
  });

  it("should have a method that creates a new instance of Turn, updates the turn count/current card, adds incorrect answers to an incorrectGuesses array, and returns feedback on guess", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);
    
    expect(round.currentCard).to.deep.equal(cards[0])
    expect(round.takeTurn("object")).to.equal("correct!")
    expect(round.currentTurn).to.be.an.instanceOf(Turn);
    expect(round.turnCount).to.equal(1);
    expect(round.incorrectGuesses.length).to.equal(0);
    expect(round.currentCard).to.deep.equal(cards[1])

    expect(round.takeTurn("function")).to.equal("incorrect!");
    expect(round.turnCount).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal(["function"]);
    expect(round.currentCard).to.deep.equal(cards[2])
  });

  it("should have a method that calculates and returns the percentage of correct guesses", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);

    round.takeTurn("function");
    expect(round.calculatePercentCorrect()).to.equal(0);
    round.takeTurn("array");
    expect(round.calculatePercentCorrect()).to.equal(50);
    round.takeTurn("accessor method");
    round.takeTurn("mutator method");
    expect(round.calculatePercentCorrect()).to.equal(25);
  });

  it("should have a method that prints a 'round-over' message and percentage of correct answers", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);

    round.takeTurn("object");
    round.takeTurn("array");
    round.takeTurn("mutator method");
    round.takeTurn("iteration method");

    expect(round.endRound()).to.equal(console.log("** Round over! ** You answered 75% of the questions correctly!"));
  });

  it("should have a method that saves the round's start time as a property", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);
    let round = new Round(deck);

    round.recordStartTime();

    expect(round).to.have.property("startTime").that.is.a("number");
    expect(`${round.startTime}`).to.have.lengthOf.at.least(13);
  });
});