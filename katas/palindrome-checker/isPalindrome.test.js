const isPalindrome = require("./isPalindrome");

test("Palindrome Checker", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("madam")).toBe(true);
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("world")).toBe(false);
  expect(isPalindrome("palindrome")).toBe(false);
});
