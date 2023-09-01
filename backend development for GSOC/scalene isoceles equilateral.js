let side_a = 10;
let side_b = 14;
let side_c = 6;
if (side_a ==side_b && side_b ==side_c) {
    console.log("it is a equilateral triangle");
    
}
/*else if(side_a!=side_b && side_b!=side_c && side_c!=side_a){
    console.log("it is a scalene triangle");
}else{
    console.log("it is a isosceles triangle");
}*/
else if (side_a==side_b || side_c==side_b || side_c==side_a) {
    console.log("it is isosceles triangle");
} else{
    console.log("it is a scalene triangle");
}
