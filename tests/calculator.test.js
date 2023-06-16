const calculator = require("../scripts/calculator");

describe("Calculator", () => {
  test("Add", () => {
    expect(calculator.add(10, 20)).toBe(30);
  });

  test("Subtract", () => {
    expect(calculator.subtract(100, 50)).toBe(50);
  });

  test("Divide", () => {
    expect(calculator.divide(200, 2)).toBe(100);
  });

  test("Multiply", () => {
    expect(calculator.multiply(50, 4)).toBe(200);
  });
});
