function doubleReverseAndPrintArr(arr) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            res.push(arr[i] * 2);
        }
    }

    console.log(res.reverse().join(" "));
}

doubleReverseAndPrintArr([3, 0, 10, 4, 7, 3]);