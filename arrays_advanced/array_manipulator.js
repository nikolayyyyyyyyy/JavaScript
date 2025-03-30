function manipulate(array, commands) {
    commands.forEach(c => {
        const command = c.split(" ").at(0);
        const arguments = c.split(" ").splice(1);
        let index = 0;
        let element = 0;
        let position = 0;
        let elements = [];
        switch (command) {
            case "add":
                index = Number.parseInt(arguments[0]);
                element = Number.parseInt(arguments[1]);
                array.splice(index, 0, element);
                break;

            case "addMany":
                index = Number.parseInt(arguments[0]);
                elements = arguments.splice(1);
                array.splice(index, 0, ...elements.map(e => Number.parseInt(e)));
                break;

            case "contains":
                element = Number.parseInt(arguments[0]);
                console.log(array.indexOf(element));
                break;

            case "remove":
                index = Number.parseInt(arguments[0]);
                array.splice(index, 1);
                break;

            case "shift":
                position = Number.parseInt(arguments[0]);
                for (let i = 0; i < position; i++) {
                    array.push(array.shift());
                }
                break;
            case "sumPairs":
                array = array.reduce((acc, c, index, arr) => {
                    if (index % 2 === 0) {
                        acc.push(c + arr[index + 1] || c);
                    }
                    return acc;
                }, []);
                break;
            case "print":
                console.log(array);
                break;
        }
    });
}

manipulate([1, 2, 4, 5, 6, 7, 8], ['sumPairs', 'print']);