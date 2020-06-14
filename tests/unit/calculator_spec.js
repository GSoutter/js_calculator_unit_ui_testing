var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add two numbers', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(5, calculator.runningTotal)
  })

  it("it can subtract from the total", function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })

  it("it can multiply two numbers", function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })

  it("it can multiply two numbers", function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })

  it("it can concatenate multiple number button clicks", function(){
    calculator.numberClick(7)
    calculator.numberClick(8)
    calculator.numberClick(9)
    assert.equal(789, calculator.runningTotal)
  })

  it("it can chaing multiple operations together", function(){
    calculator.numberClick(2)
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("+")
    calculator.operatorClick("=")

    assert.equal(256, calculator.runningTotal)
  })

  it("it can clear the runnning total without affecting calculation", function(){
    calculator.numberClick(7)
    calculator.operatorClick("+")
    calculator.numberClick(7)
    calculator.operatorClick("*")
    calculator.numberClick(2)
    calculator.clearClick()
    calculator.numberClick(1)
    calculator.operatorClick("=")

    assert.equal(14, calculator.runningTotal)
  })

  it("it can handle dividing by zero", function(){
    calculator.numberClick(7)
    calculator.operatorClick("/")
    calculator.numberClick(0)
    calculator.operatorClick("=")

    assert.equal('Undefined', calculator.runningTotal)
  })



});
