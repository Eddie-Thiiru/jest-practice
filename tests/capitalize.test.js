const capitalize = require("../scripts/capitalize");

test("Capitalize string", () => {
  expect(capitalize("hello")).toMatch(/^[A-Z][a-zA-Z]/);
});
