function insertionSortAnalyzer(arr, comparator) {
  const sortedArray = [...arr] // don't mutate the input
  let iterations = 0
  let swaps = 0

  for (let i = 1; i < sortedArray.length; i++) {
    for (let j = i; j > 0; j--) {
      iterations++
      if (comparator(sortedArray[j - 1], sortedArray[j]) > 0) {
        [sortedArray[j - 1], sortedArray[j]] = [sortedArray[j], sortedArray[j - 1]];
        swaps++
      } else {
        break
      }
    }
  }
  return { sortedArray, iterations, swaps }
}

const comparator = (a, b) => a - b;

const result = insertionSortAnalyzer([5, 2, 4, 6, 1, 3], comparator);

console.log(result);
