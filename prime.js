

function isPrime(n){
    for(i=2; i<n; i++){
        if(n%i ==0){
            return "Sorry not a prime number."
        }
    }
    return "Your number is a prime number"

}

let result = isPrime(5);
console.log(result);