const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');
const expect = chai.expect;

describe("Deck", function() {

  it("should be an instance of Deck", function() {
    let deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("should be an instance of Deck", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
    expect(deck.deckLength).to.equal(4);
  });
});