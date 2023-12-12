let n = prompt ("write a number n");
let number = 0;
let total = 0;

for (let i = 0; i<n; i++){
    number = parseFloat(prompt('number'));
    total = total + number;
}
console.log(total);

