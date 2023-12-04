import { add, logSomething } from "../src/function-test.ts";

describe("Test example", () => {
  test("Should return sum", () => {
    const a = 1;
    const b = 2;

    expect(add(a, b)).toBe(3);
  });

  test("should display message", () => {
    const c = "exemple";

    expect(logSomething(c)).toBe("a = exemple");
  });
});
