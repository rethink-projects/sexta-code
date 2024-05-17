const arabicToRoman = require("./romanNumerals");

test("Arabic to Roman", () => {
  expect(arabicToRoman(1)).toBe("I");
  expect(arabicToRoman(4)).toBe("IV");
  expect(arabicToRoman(9)).toBe("IX");
  expect(arabicToRoman(58)).toBe("LVIII");
  expect(arabicToRoman(1994)).toBe("MCMXCIV");
});
