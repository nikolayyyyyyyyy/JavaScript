function parseObj(input) {
    const entity = JSON.parse(input);

    for (const [key, value] of Object.entries(entity)) {
        console.log(`${key}: ${value}`);
    }
}


parseObj('{"name": "George", "age": 40, "town": "Sofia"}');