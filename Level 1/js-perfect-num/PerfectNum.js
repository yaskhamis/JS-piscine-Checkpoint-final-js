function isPerfectNum(n) {
    let c = 0
    for (let i = 1; i < n; i++){
        if (n%i===0){
            c = c+i
        }
    }
    if (c === n){
        return true
    } else {
        return false
    }
}

console.log(isPerfectNum(6))
console.log(isPerfectNum(28))
console.log(isPerfectNum(12))