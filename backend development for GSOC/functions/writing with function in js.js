function isEvenOrOdd(num) {
    if (num % 2==0) {
        return "Even";
        
    }
    else{
        return "Odd";

    }
}

let x =5;
let y =51;
let z =54;

console.log( "x is " , isEvenOrOdd(x));
console.log( "y is " , isEvenOrOdd(y));
console.log( "z is " , isEvenOrOdd(z));