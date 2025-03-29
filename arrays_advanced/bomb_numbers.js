function bomb(input, nums) {
    const number = nums.at(0);
    const pow = nums.at(1);
    input.reduce((acc, c) => {
        if (c === number) {
            acc.push(input.splice(input.indexOf(c) - pow, (pow * 2) + 1));
        }

        return acc;
    }, []);
    return input;
}


console.log(bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]).reduce((a, b) => a + b));