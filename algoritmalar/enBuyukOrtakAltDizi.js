// Longest Common Subsequence
function LCS_RECURSION(i, j, A, B) {
  if (A[i] === undefined || B[j] === undefined) {
    return [];
  } else if (A[i] === B[j]) {
    const result = LCS_RECURSION(i + 1, j + 1, A, B);
    return [A[i], ...result];
  } else {
    const result1 = LCS_RECURSION(i + 1, j, A, B);
    const result2 = LCS_RECURSION(i, j + 1, A, B);

    return result1.length > result2.length ? result1 : result2;
  }
}

const diziA = ["b", "d"];
const diziB = ["a", "b", "c", "d"];

const sonuc = LCS_RECURSION(0, 0, diziA, diziB);
console.log(sonuc);

function LCS_asagidanYukari(a, b) {
  const matrix = new Array(a.length + 1)
    .fill()
    .map(() => Array(b.length + 1).fill(0));

  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = 1 + matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
    }
  }

  console.log(matrix[a.length][b.length]); // Ortak elemanların sayısı
  console.log(matrix); // tablonun kendisini dönderir
  console.log(ortakElemanlariYazdir(a, b, matrix)); // Ortak elemanlar: [b,d]
}

const sonuc2 = LCS_asagidanYukari(diziA, diziB);

function ortakElemanlariYazdir(a, b, matrix) {
  let i = a.length,
    j = b.length;
  const commonSubsequence = [];

  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      commonSubsequence.unshift(a[i - 1]);
      i--;
      j--;
    } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return commonSubsequence;
}
