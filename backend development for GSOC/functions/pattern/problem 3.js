function pattern(n) {
    //we will write a loop which will repeat some task for every row
    for (let row= 1; row <=  n ; row++){
        //inside this loop of row, we will do the task for each row
        // Task - <some spaces> <some stars>
        //n=7 , row = 3, "    ***" this string will get printed for this row
        //so lets build the spaces first
        let star = " ";
        let spaces = n - row;
        //loop using which we will concatenate  (n-row) spaces
        for (let j = 1 ; j <= spaces;j++){
            star+= " ";
        }
        //after the above loop ends ,we will be having (n-rows) in  star
        //eg:- n=7 ; rows=3 ; star ="    " char hoga na
        //now we will write a loop to concatenate stars
        let str = row;
        for(let col =1 ; col<=str ; col++ ){
            star += "*";
        }
        //after the end of of above loop we have both spaces & then
        //stars in the string 
        console.log(star); //print the string 
    }
    
} 

pattern(5) ;

/*
     *
    **
   ***
  ****
 *****

 */
