// Check if a number is prime or not

function isPrime(val) {
    if(val<2){
        return false;
    }

    for(i=2;i<=Math.sqrt(val);i++){
        if(val%i === 0){
            return false;
        }
    }

    return true;
    
}


console.log(isPrime(1)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false

// Big-O = O(sqrt(n))