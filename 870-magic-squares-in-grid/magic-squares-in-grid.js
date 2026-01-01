/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const m = grid.length;
  const n = grid[0]?.length || 0;
  if (m < 3 || n < 3) return 0;

  let count = 0;

  // Check if 3x3 subgrid starting at (r, c) is a magic square
  function isMagic(r, c) {
    // Center must be 5 for a 1–9 Lo Shu magic square
    if (grid[r + 1][c + 1] !== 5) return false;

    // All numbers must be 1..9 and distinct
    const seen = new Array(10).fill(false);
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        const v = grid[i][j];
        if (v < 1 || v > 9 || seen[v]) return false;
        seen[v] = true;
      }
    }

    // Check rows, cols, diagonals sum to 15
    const s = 15;
    for (let i = 0; i < 3; i++) {
      if (grid[r + i][c] + grid[r + i][c + 1] + grid[r + i][c + 2] !== s) return false;
      if (grid[r][c + i] + grid[r + 1][c + i] + grid[r + 2][c + i] !== s) return false;
    }
    if (grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== s) return false;
    if (grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== s) return false;

    return true;
  }

  for (let r = 0; r <= m - 3; r++) {
    for (let c = 0; c <= n - 3; c++) {
      if (isMagic(r, c)) count++;
    }
  }

  return count;

};