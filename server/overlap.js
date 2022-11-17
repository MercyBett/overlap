function detectOverlappingWords(word1, word2) {
  /* Creating a matrix with the length of the strings plus one. */
  const m = word1.length;
  const n = word2.length;
  const matrix = new Array(m + 1).fill(new Array(n + 1).fill(0));

  /* This is the dynamic programming part of the algorithm. It is filling the matrix with the longest
  common subsequence lengths. */
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) matrix[i][j] = 0;
      else if (word1[i - 1] == word2[j - 1])
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      else matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
    }
  }

  let overlappingCharacters = "";

  /* This is the backtracking part of the algorithm. It is going through the matrix and finding the
  longest common subsequence. */
  (i = m), (j = n);
  while (i > 0 && j > 0) {
    if (word1[i - 1] == word2[j - 1]) {
      overlappingCharacters = word1[i - 1] + overlappingCharacters;
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) i--;
    else j--;
  }
  return overlappingCharacters;
}

module.exports = { detectOverlappingWords };
