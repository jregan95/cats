const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
const bombay = breedDetails('Bombay');

const expectedDesc1 = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
const balinese = breedDetails('Balinese')

describe('#breedDetails', () => {
  it("returns breed details for the bombay breed", () => {
    assert.equal(expectedDesc, bombay);
  })

  it("return breed deatails for balinese", () => {
    assert.equal(expectedDesc1, balinese);
  })
});

