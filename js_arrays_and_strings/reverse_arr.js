function reverseArrayAndPrint(n, array) {
    console.log(array.splice(0, n).reverse().join(" "));
}

reverseArrayAndPrint(3, [10, 20, 30, 40, 50]);