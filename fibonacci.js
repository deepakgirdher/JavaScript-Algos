// Fibonacci Series

function fibo (val) {
    let fib = [0,1];
    for(i=2;i<val;i++){
        fib.push(fib[i-1]+fib[i-2]);
    }
    return fib;
}


console.log(fibo(3)); // [0,1,1]
console.log(fibo(7)); // [0,1,1,2,3,5,8]
console.log(fibo(5)); // [0,1,1,2,3]

// Big-O = O(n)