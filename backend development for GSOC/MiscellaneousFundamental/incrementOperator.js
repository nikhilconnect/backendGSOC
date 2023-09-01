//postfix urnary operator :- first assign then increment

let a=10;
let y = a++;
console.log(a,y); 
a++;// we are not assigning
console.log(a,y);

//prefix  urnary operator :- increment first then assign
let b=10;
let x=++b;
console.log(b,x)
++b;
console.log(b,x);

//unary plus :- +x

let z = "22";
let w= +z;
console.log(typeof w); 



//unary plus :- -x

let p = "22";
let q = -p;
console.log(typeof q); 
console.log( q); 
//understand the difference between them

/*let p = "-22";
let q = -p;
console.log(typeof q); 
console.log( q); */


/*let p = "22";
let q = -p;
console.log(typeof p,q); 
console.log(p, q); */


