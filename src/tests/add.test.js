const add = (a, b) => a + b;
const generatingGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should greeting name", () => {
  const result = generatingGreeting("BearCola");
  expect(result).toBe("Hello BearCola");
});

test("should generate greeting for no name", () => {
  const result = generatingGreeting();
  expect(result).toBe("Hello Anonymous");
});
