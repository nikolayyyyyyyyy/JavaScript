function solve(input) {
    input.sort((a, b) => a - b);
    const res = [];

    while (input.length) {
        res.push(input.pop());
        res.push(input.shift());
    }
    return res;
}

console.log(solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));