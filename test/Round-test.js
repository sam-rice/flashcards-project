const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
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

});