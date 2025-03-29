function solve(input) {
    let array = input.at(0).split(" ").map(e => Number(e));
    const maxCapacity = input.at(1);

    const commands = input.slice(2);

    commands.forEach(command => {
        if (command.startsWith("Add")) {
            const numberOfPassengers = Number.parseInt(command
                .split(" ")
                .at(1));

            if (numberOfPassengers <= maxCapacity) {
                array.push(numberOfPassengers);
            }
        } else {
            const passengers = Number.parseInt(command);
            if (array.some(e => (e + passengers) <= maxCapacity)) {
                const index = array.findIndex(e => (e + passengers) <= maxCapacity);

                if (index != -1) {
                    array[index] += passengers;
                }
            }
        }
    });

    return array;
}

console.log(solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']).join(" "));
