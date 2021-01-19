
let fibo = [0, 1];
for(i = 2; i<= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo);

// create a function for fibonacci number

function fibonacciNumber(n){
    let fibonacci = [0, 1];
    for(i=2; i<=n; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}

let expectedNumber = fibonacciNumber(10);
console.log(expectedNumber);