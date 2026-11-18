function nestedArrayReverser(words) {
  const result = []
  for (let i = words.length - 1; i >= 0; i--) {          // inner arrays, last to first
    for (let j = words[i].length - 1; j >= 0; j--) {     // words, last to first
      result.push(words[i][j])
    }
  }
  return result.join(' ')
}

console.log(nestedArrayReverser([["hello", "world"], ["this", "is"], ["a", "test"]]))
console.log(nestedArrayReverser([]))