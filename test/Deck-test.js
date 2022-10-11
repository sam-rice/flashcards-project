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
    let card1 = new Card(1, "What year was the Fender Jazzmaster released?", ["1951", "1963", "1958", "1970"], "1958");
    let card2 = new Card(2, "What year was the Gibson Les Paul released?", ["1951", "1952", "1958", "1963"], "1952");
    let card3 = new Card(3, "What year was the Epiphone Sheraton released?", ["1951", "1966", "1958", "1959"], "1959");
    let card4 = new Card(4, "What year was the Fender Precision Bass released?", ["1950", "1963", "1958", "1951"], "1951");
    let deck = new Deck([card1, card2, card3, card4]);

    expect(deck.cards).to.deep.equal([card1, card2, card3, card4]);
    expect(deck.deckLength).to.equal(4);
  });
});