function printSequence(n, m) {
    let i = 1;
    const arr = [i];

    while (true) {
        if (arr.length < m) {
            if (arr.reduce((acc, c) => acc + c) === i) {
                arr.push(i);
            }
            i++;
            continue;
        }

        if (arr.slice(arr.length - m).reduce((acc, c) => acc + c) === i) {
            arr.push(i);
        }

        if (arr.length === n) {
            break;
        }
        i++;
    }

    console.log(arr.join(" "));
}

printSequence(8, 2)