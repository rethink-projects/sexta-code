const stringCompression = require("./stringCompression");

test("String Compression", () => {
  expect(stringCompression("aabcccccaaa")).toBe("a2b1c5a3");
  expect(stringCompression("abcdef")).toBe("a1b1c1d1e1f1");
  expect(stringCompression("aabbcc")).toBe("a2b2c2");
});
