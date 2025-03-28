function solve(input) {
    let arr = input[0]
        .split(" ")
        .map(e => Number.parseInt(e));

    input.slice(1).forEach(c => {
        switch (c.split(" ").at(0)) {
            case 'Add':
                arr.push(Number.parseInt(c.split(" ").at(1)));
                break;

            case 'Remove':
                arr = arr.filter(e => e !== Number.parseInt(c.split(" ").at(1)));
                break;

            case 'RemoveAt':
                arr.splice(Number(c.split(" ")[1]), 1);
                break;

            case 'Insert':
                const index = Number.parseInt(c.split(" ").at(2));
                const value = Number.parseInt(c.split(" ").at(1));
                arr.splice(index, 0, value);
                break;
        }
    });

    return arr.join(" ");
}

console.log(solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']));