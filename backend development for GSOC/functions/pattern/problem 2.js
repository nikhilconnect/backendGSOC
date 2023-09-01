function pattern(n) {
    //logic for printing pattern 
    //write a loop to repeat a task for n rows 
    for(let row =1 ;row<=n ; row++){
        //task
        //the task is to concatenate "*"  n times
        let star = " " ;
        for( let col = 1; col<=row ; col++){
            star += "*"
        }
        console.log(star);
        
    } 
    return true
}

pattern(3);
//pattern(3);
//pattern(5);
 //console.log(pattern(6));
 
/*



  *
  **
  ***



 */


//radha krishna



