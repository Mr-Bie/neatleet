let sudokuSize = 9;

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (hasDuplicate(board[i])) return false;
    if (
      hasDuplicate(
        new Array(
          board[0][i],
          board[1][i],
          board[2][i],
          board[3][i],
          board[4][i],
          board[5][i],
          board[6][i],
          board[7][i],
          board[8][i]
        )
      )
    )
      return false;

    if (
      hasDuplicate(
        new Array(
          board[Math.floor(i / 3) * 3][(i % 3) * 3],
          board[Math.floor(i / 3) * 3][(i % 3) * 3 + 1],
          board[Math.floor(i / 3) * 3][(i % 3) * 3 + 2],
          board[Math.floor(i / 3) * 3 + 1][(i % 3) * 3],
          board[Math.floor(i / 3) * 3 + 1][(i % 3) * 3 + 1],
          board[Math.floor(i / 3) * 3 + 1][(i % 3) * 3 + 2],
          board[Math.floor(i / 3) * 3 + 2][(i % 3) * 3],
          board[Math.floor(i / 3) * 3 + 2][(i % 3) * 3 + 1],
          board[Math.floor(i / 3) * 3 + 2][(i % 3) * 3 + 2]
        )
      )
    )
      return false;
  }
  return true;
};

var hasDuplicate = function (array, log = false) {
  if (log) console.log("aary", array);
  array = array.filter((v) => v !== ".");
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) return true;
    else map.set(array[i], 1);
  }
  if (log) console.log(map.keys());
  return false;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
