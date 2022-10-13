const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const data = require('../src/data');


describe("Deck", function() {

  it("should be an instance of Deck", function() {
    let deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("should be instantiated with an array of Cards", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);

    expect(deck.cards).to.deep.equal(cards);
  });

  it("should know how many Cards are in the Deck", function() {
    let cards = []
    for (let i = 0; i < 4; i++) { 
      cards.push(new Card(data.prototypeData[i]));
    };
    let deck = new Deck(cards);

    expect(deck.deckLength).to.equal(4);
  });
});