function isPrime (x) {
    for (let i = 2; i <= x-1 ; i++){
        if (x % i==0) {
            //we found a number in range [2, x-1] which divides x
            //hence x is non prime
        

            return false;
            
        }

    }
/*
the loop completed but we didn't return false, that means
no number in the range [2 , x-1] can divide x hence x is prime
*/

    return true;
    
}

// let a= 5;
// let answer = isPrime(a)
// console.log(answer);

// upar jo tum likha hai isse itna bada likhne ka jarurat nahi you can also write:-

console.log(isPrime(5));