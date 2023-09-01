function pattern(n){
    for(let row = 1; row <=n ; row++){
let str = " ";
 let space = n-row ;
 for (let j =1; j<=space ; j++){
    str +=" ";
 }
 let star = 2*row -1 ;
 for (let col = 1 ; col<=star; col ++){
    str += "*"

 }
 console.log(str);
    }
}

pattern (5);


/*
     *
    ***
   *****
  *******
 *********
*/