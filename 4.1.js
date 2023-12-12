function calcSurface (length, width){
return length*width; }
 
let length= Number(prompt("put the length of rectangle"));
let width= Number(prompt("put the width of rectangle"));
console.log(calcSurface (length, width));