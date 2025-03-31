function solve(input) {
    const dictionary = new Map();

    input.forEach(e => {
        const [name, value] = Object.entries(JSON.parse(e))[0];
        dictionary.set(name, value);
    });

    for (const [key, value] of Array.from(dictionary.entries()).sort((a, b) => a[0].localeCompare(b[0]))) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);