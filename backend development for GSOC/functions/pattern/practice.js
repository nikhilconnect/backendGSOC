function lower(n) {
    for (let row =1;row<=(n-1)/2; row+=1){
        let str=" ";
        let leftstars= ((n-1)/2) -row +1 ;
        for (let i =1 ; i<=leftstars ; i+=1){
            str +="*";
        }
    
 let spaces = 2*row - 1;
 for (let j =1; j<=spaces ;j+=1){
    str+= " ";

 }

 let rightstars = ((n-1)/2) -row +1 ;
 for (let k=1; k<= rightstars;k+=1 ){
    str += "*";
 }
console.log(str);
    }

}
lower (6);