const fizzBuzz = require("./fizzBuzz");

test("FizzBuzz", () => {
  const results = fizzBuzz();

  expect(results[2]).toBe("Fizz"); // 3
  expect(results[4]).toBe("Buzz"); // 5
  expect(results[14]).toBe("FizzBuzz"); // 15
  expect(results[29]).toBe("FizzBuzz"); // 30
  expect(results[0]).toBe("1"); // 1
  expect(results[98]).toBe("Fizz"); // 99
  expect(results[99]).toBe("Buzz"); // 100
});
