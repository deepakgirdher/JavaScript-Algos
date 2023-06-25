// factorial of a number

function facto (val) {
    let result = 1;
    for(i=2;i<=val;i++){
        result *= i;
    }
    return result;
}


console.log(facto(0)); // 1
console.log(facto(1)); // 1
console.log(facto(6)); // 720

// Big-O = O(n)