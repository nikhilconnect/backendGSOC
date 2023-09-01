function printFibonacci(n){
    if (n==0){
        console.log(0);
        return ;
    
    }
if (n>=1){
    console.log(0);
    console.log(1);
    

}
let last =1;
let secondlast =0;
for (let i=2;i<=n;i++){
    let answer = last +secondlast ;
    console.log(answer);
    secondlast =last;
    last=answer;
}

}

printFibonacci(13);