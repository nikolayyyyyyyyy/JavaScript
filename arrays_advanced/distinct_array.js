function distinctArray(arr) {
    return arr.reduce((acc, c) => {
        if (!acc.includes(c)) {
            acc.push(c);
        }

        return acc;
    }, [])
}


console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]).join(" "));