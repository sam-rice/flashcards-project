class Deck {
  constructor(array) {
    this.cards = array || []
    this.deckLength = this.cards.length
  };

  countCards = () => this.deckLength;
  
};

module.exports = Deck;