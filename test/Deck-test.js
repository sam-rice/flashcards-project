const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe("Deck", function() {

  it("should be an instance of Deck", function() {
    let deck = new Deck();

    expect(deck).to.be.an.instanceOf(Deck);
  });

  it("should be an instance of Deck", function() {
    let card1 = new Card();
    let card2 = new Card();
    let card3 = new Card();
    let card4 = new Card();
    let deck = new Deck([card1, card2, card3, card4]);

    expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
    expect(deck.deckLength).to.equal(4);
  });
});