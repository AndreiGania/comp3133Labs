const { expect } = require("chai");
const calc = require("../lab2_mocha_test/app/calculator");


describe("Calculator Tests", function () {

  it("add(5,2) should equal 7 PASS", function () {
    const result = calc.add(5, 2);
    console.log("ADD PASS expected 7, result", result);
    expect(result).to.equal(7);
  });

  it("add(5,2) should equal 8 FAIL", function () {
    const result = calc.add(5, 2);
    console.log("ADD FAIL expected 8, result", result);
    expect(result).to.equal(8);
  });

  // SUB
  it("sub(5,2) should equal 3 PASS", function () {
    const result = calc.sub(5, 2);
    console.log("SUB PASS expected 3, result", result);
    expect(result).to.equal(3);
  });

  it("sub(5,2) should equal 5 FAIL", function () {
    const result = calc.sub(5, 2);
    console.log("SUB FAIL expected 5, result", result);
    expect(result).to.equal(5);
  });

  // MUL
  it("mul(5,2) should equal 10 PASS", function () {
    const result = calc.mul(5, 2);
    console.log("MUL PASS expected 10, result", result);
    expect(result).to.equal(10);
  });

  it("mul(5,2) should equal 12 FAIL", function () {
    const result = calc.mul(5, 2);
    console.log("MUL FAIL expected 12, result", result);
    expect(result).to.equal(12);
  });

  // DIV
  it("div(10,2) should equal 5 PASS", function () {
    const result = calc.div(10, 2);
    console.log("DIV PASS expected 5, result", result);
    expect(result).to.equal(5);
  });

  it("div(10,2) should equal 2 FAIL", function () {
    const result = calc.div(10, 2);
    console.log("DIV FAIL expected 2, result", result);
    expect(result).to.equal(2);
  });

});
