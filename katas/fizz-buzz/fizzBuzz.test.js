const fizzBuzz = require("./fizzBuzz");

test("FizzBuzz", () => {
  const results = [];
  for (let i = 1; i <= 100; i++) {
    results.push(fizzBuzz(i));
  }

  expect(results[2]).toBe("Fizz"); // 3
  expect(results[4]).toBe("Buzz"); // 5
  expect(results[14]).toBe("FizzBuzz"); // 15
  expect(results[29]).toBe("FizzBuzz"); // 30
});
