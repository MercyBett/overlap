describe("detectOverlappingWords", () => {
  it("should return the correct overlapping characters and longest overlap for words that have a complete overlap", () => {
    const word1 = "device";
    const word2 = "ice";

    const expectedOutput = {
      overlappingCharacters: "ice",
      longestOverlap: 3,
    };

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have a partial overlap", () => {
    const word1 = "client";
    const word2 = "ice";

    const expectedOutput = {
      overlappingCharacters: "ie",
      longestOverlap: 2,
    };

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have a hidden overlap", () => {
    const word1 = "intercities";
    const word2 = "ice";

    const expectedOutput = {
      overlappingCharacters: "ice",
      longestOverlap: 3,
    };

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });

  it("should return the correct overlapping characters and longest overlap for words that have no overlap", () => {
    const word1 = "apple";
    const word2 = "orange";

    const expectedOutput = {
      overlappingCharacters: "",
      longestOverlap: 0,
    };

    expect(detectOverlappingWords(word1, word2)).toEqual(expectedOutput);
  });
});
