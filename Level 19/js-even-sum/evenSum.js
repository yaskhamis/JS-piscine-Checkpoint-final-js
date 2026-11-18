const evenSum = (nums) => {
    let n = 0
    for (let i = 0; i <= nums;i++){
        if (i%2===0){
            n=n+i
        }
    }
    return n
}

console.log(evenSum(5))
console.log(evenSum(1))