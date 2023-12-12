
let min = prompt("put your min number :");
let max = prompt("put your max number :");
let current = prompt("put your current number :");

min = parseFloat(min);
max = parseFloat(max);
current = parseFloat(current);


if (min < current && max > current) {
    console.log(current);
} else {
    console.log("Le numéro actuel n'est pas compris entre le numéro minimum et le numéro maximum.");
}