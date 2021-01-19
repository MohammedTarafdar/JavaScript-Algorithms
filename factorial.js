/*
# What is Factorial?
# 3! = 1X2X3
# 4! = 1X2x3x4
# 5! = 1x2x3x4x5
*/

// What will be the factorial of 10 ?

let factorial = 1;

for(let i =1; i <=10; i++){
    factorial = factorial * i;
    console.log(i, factorial);
}

// create a function for factorial with for loop

function factorialValue(n){
    var myFactorial = 1;
    for(var i=1; i<=n; i++){
        myFactorial = myFactorial * i;
    }
    return myFactorial;
}

var result = factorialValue(5);
console.log(result);

var result = factorialValue(10);
console.log(result);

var result = factorialValue(0);
console.log(result);

// factorial with while loop

var i = 1;
var expectedFactorial =1;

while (i <=10){
    expectedFactorial = expectedFactorial * i;
    //console.log(expectedFactorial);
    i++;

}
console.log(expectedFactorial);

// create a function for factorial with while loop

function expectedFactorialValue(n){
    let i = 1;
    let fact = 1;
    while(i <= n){
        fact = fact *i;
        i ++;
    }
    return fact;

}

let expectedValue = expectedFactorialValue(10);
console.log(expectedValue);

// what is recursive ?

// 10! = 10*9*8*7*6*5*4*3*2*1

