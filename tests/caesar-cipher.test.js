const caesarCipher = require("../scripts/caesar-cipher");

test("Cipher text", () => {
  expect(caesarCipher("Attack on titan", 5)).toBe("fyyfhp ts ynyfs");
});
