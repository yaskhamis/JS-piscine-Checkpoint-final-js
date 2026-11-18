function divisors(n) {
    if (n < 0){
        n = -n
    }
    let x = []
    for (let i = 1; i < n; i++){
        if (n%i===0){
            x.push(i)
        }
    }
    return x
}

console.log(divisors(15))
console.log(divisors(28))
console.log(divisors(1))
console.log(divisors(-15))