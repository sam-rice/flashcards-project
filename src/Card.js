class Card {
  constructor(dataObject) {
    this.id = dataObject.id
    this.question = dataObject.question
    this.answers = dataObject.answers
    this.correctAnswer = dataObject.correctAnswer
  };
};

module.exports = Card