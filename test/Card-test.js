const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const data = require('../src/data');

describe('Card', function() {
  let card;

  this.beforeEach(() => card = new Card(data.prototypeData[0]));

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should store a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should store a list of possible answers', function() {
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should store the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});