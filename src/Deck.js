class Deck {
  constructor(array) {
    this.cards = array || []
    this.deckLength = this.cards.length
  };
};

module.exports = Deck;