import Consumer from "fusion:consumer";

import inlineAdLogic from "./inlineAdLogic";

describe("inline ad logic function", () => {
  const mockElements = [
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test",
    "test"
  ];

  it("should add some inline ads every 5 items", () => {
    const modifiedElements = inlineAdLogic(mockElements);
    expect(modifiedElements[5].type).toBe("inline_element");
    expect(modifiedElements[10].type).toBe("inline_element");
    expect(modifiedElements[15].type).toBe("inline_element");
  });

  it("should chuck in some inline ads", () => {
    const modifiedElements = inlineAdLogic(mockElements);
    expect(typeof modifiedElements[5].element).toBe("object");
  });
});
