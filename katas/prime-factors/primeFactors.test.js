const primeFactors = require("./primeFactors");

test("Prime Factors", () => {
  expect(primeFactors(28)).toEqual([2, 2, 7]);
  expect(primeFactors(45)).toEqual([3, 3, 5]);
  expect(primeFactors(1)).toEqual([]);
});
