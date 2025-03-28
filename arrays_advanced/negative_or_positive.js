function solve(input) {
    const res = [];
    input.map(e => Number.parseInt(e))
        .filter(n => n <= 0).sort((a, b) => a - b).forEach(a => res.push(a));

    input.map(e => Number.parseInt(e))
        .filter(n => n > 0).sort((a, b) => a - b).forEach(a => res.push(a));

    return res;
}

const arr = solve(['3', '-2', '0', '-1']);

arr.forEach(e => console.log(e));