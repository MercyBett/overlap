const { detectOverlappingWords } = require("./overlap");

describe("detectOverlappingWords", () => {
  it("should return the correct overlapping characters and longest overlap for words that have a complete overlap", () => {
    const word1 = "device";
    const word2 = "ice";

    const expectedOutput = "ice";

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have a partial overlap", () => {
    const word1 = "client";
    const word2 = "ice";

    const expectedOutput = "ie";

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have a hidden overlap", () => {
    const word1 = "intercities";
    const word2 = "ice";

    const expectedOutput = "ice";

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have no overlap", () => {
    const word1 = "apple";
    const word2 = "ostritch";

    const expectedOutput = "";

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });
  it("should return the correct overlapping characters and longest overlap for words that have no overlap", () => {
    const word1 = "orange";
    const word2 = "rhinoceros";

    const expectedOutput = "rne";

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });
});
