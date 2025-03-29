function searchForANumber(input, args) {
    const n = args.at(0);
    const deleteCount = args.at(1);
    const searchedNumber = args.at(2);

    const res = input
        .splice(0, n)
        .slice(deleteCount)
        .filter(e => e === searchedNumber);

    return `Number ${searchedNumber} occurs ${res.length} times.`;
}

console.log(searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]));