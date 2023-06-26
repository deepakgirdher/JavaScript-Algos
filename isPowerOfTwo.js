// Check if number is a power of 2

function isPowerOfTwo (val) {
    if(val<1){
        return false;
    }

    return (val & (val-1)) === 0 ;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(12)); // false
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(256)); // true

// Big O = O(1);

// Explanation:
// 8 in bits =>  1000
// 7 in bits =>  0111
// With &    =>  0000