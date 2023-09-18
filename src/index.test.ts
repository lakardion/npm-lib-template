import { describe, it, expect } from "vitest";
import { sayHello } from "./services";

describe("index", () => {
  it("says hello", () => {
    expect(sayHello()).toEqual("Hello world");
  });
});
