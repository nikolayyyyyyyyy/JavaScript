function sortArr(input) {
    return input
        .sort((a, b) => a.length - b.length || a.localeCompare(b));
}

console.log(sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']).join("\n"));
