//if :-
console.log("start");
if(10>5) { //this condition is true
    console.log("yes");
}
if(10<5) { //this line didn't got executed
    console.log("yes");
}

if(10 ) {
    console.log("printed 10")
}

console.log("end")

//if else :-

console.log ("welcome to prime video");
let isPrimeMember =true ;
if (isPrimeMember) {
    console.log("enjoy the content")
}
else {
    console.log("Please buy the subscription to enjoy the content ")
}


//else - if & nested conditionals :-
console.log("else if topic starts")
 let isUserPremium =  true;
 let isUserVip =  true;
 if (isUserPremium) {
    console.log("enjoy the premium content on hotstar")

 }
 else if (isUserVip){
    console.log ("enjoy the vip content on hotstar, for more upgrade to premium")
 }
 else {
    console.log("plz purchase either vip or premium to enjoy the content")
 }

 //nested if else :-
 console.log("nested if else start")
 let isUserPrime = true ;
 let isUserDiscovery = true ;
 let isUserNetfix = true;
if (isUserPrime) {
    if (isUserDiscovery) {
        if (isUserNetfix){
            console.log("enjoy all prime & discovery & netflix content")

        } else {
            console.log("enjoy both prime & discovery content")

        }
        
    }
    else if (isUserNetfix){
        console.log("enjoys both prime & netflix")
    }
    else {
        console.log("enjoys only prime content")
    }
}
else {
    console.log("plz buy the subcription")
}
