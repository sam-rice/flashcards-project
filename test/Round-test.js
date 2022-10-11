const chai = require('chai');
const Card = require('../src/Card');
const Round = require('../src/Round');
const expect = chai.expect;

describe("Round", function() {
  
  it("should be an instance of Round", function() {
    let round = new Round();

    expect(round).to.be.an.instanceOf(Round);
  });

});