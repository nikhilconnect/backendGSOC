function gcd (a,b){
    let answer =1 ;
    for(let i=2;i<=Math.min(a,b);i++){
        if (a%i==0 && b%i==0){
           answer =i ;
                }
    }
    return answer;
}
gcd (8,24) 

//above question of find gcd of two by euclid algorithm

