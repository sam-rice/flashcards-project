const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/test-data');


describe("Deck", function() {
  let cards, deck;

  this.beforeEach(() => {
    cards = [];
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    deck = new Deck(cards);
  });

  it("should be an instance of Deck", function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("should be instantiated with an array of Cards", function() {
    expect(deck.cards).to.deep.equal(cards);
  });

  it("should know how many Cards are in the Deck", function() {
    expect(deck.deckLength).to.equal(4);
  });
});