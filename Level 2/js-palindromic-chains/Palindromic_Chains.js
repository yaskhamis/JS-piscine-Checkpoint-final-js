function palindromicChain(numbers) {
  return numbers.map((num) => {
    let n = num
    for (let i = 0; i <= 100; i++) {
      const r = Number(String(n).split('').reverse().join(''))
      if (n === r) return n
      n = n + r
    }
    return 0
  })
}

console.log(palindromicChain([87, 33, 123, 196]));
