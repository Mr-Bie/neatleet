var isValidSudoku = function (board) {};

var noDuplicate = function (array) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) return false;
    else map.set(array[i], 1);
  }
  return true;
};
