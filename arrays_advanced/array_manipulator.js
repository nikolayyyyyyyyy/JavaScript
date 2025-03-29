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
                array.splice(index, 0, ...elements);
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
                    for (let i = 0; i < array.length; i++) {
                        array.unshift(array.pop());
                    }
                }
                break;

            case "sumPairs":

                break;

            case "print":
                console.log(array);
        }
    });
}

manipulate([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);