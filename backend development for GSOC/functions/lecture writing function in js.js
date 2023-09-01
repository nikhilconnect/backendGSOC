function isEven(num) {
    if (num %2 == 0) {
        return true;
    } else {
        return false;
    }
}

// let x = 36;
// let result = isEven(x);
// if (result == true ) {
//  console.log("Even");   
// } else {
//     console.log(" Odd");
// }

// we are checking no. from 1 to 20 which are odd or even 
for (let i=1 ; i <=20; i++){
    let result = isEven (i);
    if (result == true){
        console.log(i,"Even");
    }else {
        console.log(i,"Odd");
    }
}

//doing the above for loop code in while loop code just for our basic understanding.
let i =1;
let result = isEven (i);
while (i<=20) {
    if (result == true) {
        console.log(i, "Even");
    } else{
        console.log( i, "Odd"); 
    }
    i++;
}

//some more logic 

let x= 20;
let y= 65;
let z= 81;

if (isEven(x)) {
    console.log("x is even");
    
}else{
    console.log("x is  odd");
}


if (isEven(y)) {
    console.log("y is even");
    
}else{
    console.log("y is  odd");
}



if (isEven(z)) {
    console.log("z is even");
    
}else{
    console.log("z is  odd");
}



