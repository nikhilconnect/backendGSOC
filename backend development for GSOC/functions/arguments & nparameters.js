function add(x ,y ,z) { //here x & y are parameters
    let c = x +y +z ;
    return c;
    
}
let a=10;
let b=30;
let result= add (a,b); //here a & b are arguments
console.log( result);
/*
here we are passing add(9,1) inside console.log
so first of all  add(9,1) will be processed
so add(9,1) will return  10 
& then once we have the value processed as 10 , then 
console.log will print 10 
*/


console.log(add (9,1));
console.log(add (9,1 , 12));