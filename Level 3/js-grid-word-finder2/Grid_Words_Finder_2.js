function gridWordFinder2(grid, word) {
  return grid.flatMap((row, y) =>
    row.flatMap((_, x) => {
      const right = row.slice(x, x + word.length).join("")
      const down = grid.slice(y, y + word.length).map((r) => r[x]).join("")
      const found = []
      if (right === word) {
        found.push({ x: x, y: y, direction: "horizontal" })
      }
      if (down === word && word.length > 1) {
        found.push({ x: x, y: y, direction: "vertical" })
      }
      return found
    })
  )
}

const grid = [
  ["c", "a", "t"],
  ["d", "o", "g"],
  ["r", "a", "t"],
];

console.log(gridWordFinder2(grid, "cat"));