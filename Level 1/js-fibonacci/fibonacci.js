function fibonacci(n) {
    let n1 = 0
    let n2 = 1
    let f = 0
    for (let i = 0; i < n; i++) {
        f = n1 + n2  
        n2 = n1
        n1 = f
    }
    return f
}


console.log(fibonacci(6))
console.log(fibonacci(10))