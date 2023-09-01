// fig.19
/*let s = 2;
s +=3;
console.log(s);
s+=8;
console.log(s);*/
//printing star code start


/*let n= 3;

for(let row =1 ;row<=n ; row++ ){
    let star = " " ;
    for( let col = 1; col<=n ; col++){
        star += "*"
    }
    console.log(star);

}*/

//upar wale ko function main dalna toh 

function pattern(n) {
    //logic for printing pattern 
    //write a loop to repeat a task for n rows 
    for(let row =1 ;row<=n ; row++ ){
        //task
        //the task is to concatenate "*"  n times
        let star = " " ;
        for( let col = 1; col<=n ; col++){
            star += "*"
        }
        console.log(star);
        
    } 
    return true
}

pattern(6);

// console.log(pattern(6));

/*
 ******
 ******
 ******
 ******
 ******
 ******
*/