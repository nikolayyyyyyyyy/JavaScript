function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.push(arr.shift());
    }
    return arr;
}


console.log(rotateArray([51, 47, 32, 61, 21], 2).join(" "));
