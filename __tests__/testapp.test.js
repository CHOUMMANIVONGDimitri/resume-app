import add from "../src/function-test";

describe("Test example", () => {
  test("Should return sum", () => {
    const a = 1;
    const b = 2;

    expect(add(a, b)).toBe(3);
  });
});
