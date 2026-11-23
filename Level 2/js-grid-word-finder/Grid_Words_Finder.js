//function gridWordsFinder(grid, words) {
//  if (grid.length === 0) return []
//  const lines = []
//  for (let r = 0; r < grid.length; r++) lines.push(grid[r].join(''))   // rows
//  for (let c = 0; c < grid[0].length; c++) {                            // columns
//    let col = ''
//    for (let r = 0; r < grid.length; r++) col += grid[r][c]
//    lines.push(col)
//  }
//  const result = []
//  for (const w of words) {
//    if (lines.some((line) => line.includes(w))) result.push(w)
//  }
//  return result
//}

function gridWordsFinder(grid, words) {
  if (!grid.length) return [];

  const lines = grid.map((row) => row.join(""));

  for (let c = 0; c < grid[0].length; c++) {
    let col = "";
    for (let r = 0; r < grid.length; r++) {
      col += grid[r][c];
    }
    lines.push(col);
  }

  return words.filter((word) => lines.some((line) => line.includes(word)));
}

const grid = [
["c", "a", "t"],
["a", "a", "t"],
["r", "a", "t"],
["d", "o", "g"],
];
console.log(
gridWordsFinder(grid, ["cat", "dog", "rat", "tar", "car", "rac", "g"]),
);
console.log(gridWordsFinder(grid, []));
