function sordArrAndPrint(arr) {
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}`.concat(`.${arr[i]}`));
    }
}

sordArrAndPrint(['John', 'Bob', 'Christina', 'Ema']);