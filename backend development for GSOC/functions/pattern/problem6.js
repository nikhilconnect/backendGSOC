function uppertriangle (n){
    for(let row = 1; row <=n ; row+=1){
        let str = " ";
         let space = n-row ;
         for (let j =1; j<= space ; j+=1){
            str +=" ";
         }
         let stars = 2*row -1 ;
         for (let col = 1 ; col<=stars; col ++){
            str += "*"
        
         }
         console.log(str);
            }



        }
                                                                                            
function lowertriangle (n){
//the lowerTriangle consists of only n-1 rows 
for (let row=1 ;row <=n-1 ; row+=1){
//for any given no. of row: we have spaces =row
let str = " ";
let spaces = row;
for (let j=1;j<=spaces; j+=1){
    str +=" ";

}
//for every row , when u increase the row number we decrease no of stars
//by observation we get 2*(n-row)-1  
let star = 2* (n-row) - 1;
for (let k=1; k<= star
    ; k+=1){
    str +="*";
}
console.log(str);
}


}

function pattern(n) {
    //becoz in a function you can call another function
    uppertriangle (n);
    lowertriangle(n);
    
}

pattern (7); 

/*
       *
      ***
     *****
    *******
   *********
  ***********
 *************
  ***********
   *********
    *******
     *****
      ***
       *

*/