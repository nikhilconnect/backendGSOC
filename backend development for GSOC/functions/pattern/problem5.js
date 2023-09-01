function pattern (n){
    for (let row =1 ;row<=n ;row ++){
        let star =" ";
        let space = n-row +1;
        for(let col =1 ; col <=space ; col ++){
            star += "*";
        }
        console.log (star);

    }
}
pattern(6);


/*
 ******
 *****
 ****
 ***
 **
 *
*/