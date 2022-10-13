const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/test-data');

describe('Card', function() {
  let card;

  this.beforeEach(() => card = new Card(data.prototypeData[0]));

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What year was the Fender Jazzmaster released?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(["1951", "1963", "1958", "1970"]);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('1958');
  });
});