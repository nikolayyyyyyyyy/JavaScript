function printSum(arr) {
    if (arr.length < 2) {

        console.log("Not enought numbers");
    } else {
        arr = arr.map(e => Number.parseInt(e));

        return arr.pop() + arr.shift();
    }
}


console.log(printSum(['20', '30', '40']));