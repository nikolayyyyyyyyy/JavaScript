function presentToParty(arr) {
    return arr.reduce((acc, c) => {
        const name = c.split(" ").at(0);
        if (c.split(" ").length === 3) {
            if (!acc.includes(name)) {
                acc.push(name);
            } else {
                console.log(`${name} is in the list.`);
            }
        } else {
            if (!acc.includes(name)) {
                console.log(`${name} is not in the list.`);
            } else {
                acc.splice(acc.indexOf(name), 1);
            }
        }

        return acc;
    }, []).join("\n");
}

console.log(presentToParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']));