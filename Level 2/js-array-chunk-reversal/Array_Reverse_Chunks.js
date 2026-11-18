function reverseChunks(arr, size) {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    const piece = arr.slice(i, i + size)    // i=0: [1,2,3]  i=3: [4,5,6]  i=6: [7]
    piece.reverse()                          // [3,2,1]  [6,5,4]  [7]
    result.push(...piece)                    // add each item to result
  }
  return result
}

console.log(reverseChunks([1, 2, 3, 4, 5, 6, 7], 3));

// function reverseChunks(arr, size) {
//   const result = []
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(...arr.slice(i, i + size).reverse())
//   }
//   return result
// }