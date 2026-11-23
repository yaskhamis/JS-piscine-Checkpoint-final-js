function isSnakePath(grid) {
  const copy = grid.map((row) => {return row.slice()})
  const y = copy.findIndex((row) => {return row.includes(1)})
  if (y === -1) return false; // no 1s at all
  const x = copy[y].indexOf(1)
  const erase = (x, y) => {
    if (!copy[y] || copy[y][x] !== 1) return // outside the grid, or not a 1
    copy[y][x] = 0
    erase(x + 1, y)
    erase(x - 1, y)
    erase(x, y + 1)
    erase(x, y - 1)
  }
  erase(x, y)
  return !copy.flat().includes(1) // any 1 left? then not connected
}

const grid1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 1, 0],
];

const grid2 = [
  [1, 0, 0, 0],
  [1, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

console.log(isSnakePath(grid1)); // true
console.log(isSnakePath(grid2)); // false