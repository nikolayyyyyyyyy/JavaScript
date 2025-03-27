const arr = "3,5,7,9".split(",")
    .map(n => Number.parseInt(n));

let oddSum = 0;
let evenSum = 0;
if (arr.some(n => n % 2 !== 0)) {
    oddSum = arr.filter(n => n % 2 !== 0).reduce((a, b) => a + b);
}
if (arr.some(n => n % 2 === 0)) {
    evenSum = arr.filter(n => n % 2 === 0).reduce((a, b) => a + b);;
}

console.log(evenSum - oddSum);
