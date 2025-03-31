function solve(firstArr, secondArr) {
    class Product {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }

        describe() {
            return `${this.name} -> ${this.quantity}`;
        }
    }
    const products = [];

    firstArr.forEach((e, i, arr) => {
        if (i % 2 === 0) {
            products.push(new Product(e, Number.parseInt(arr[i + 1])));
        }
    });

    secondArr.forEach((e, i, arr) => {
        if (i % 2 === 0) {
            const product = new Product(e, Number.parseInt(arr[i + 1]));
            if (products.some(e => e.name === product.name)) {
                products.find(e => e.name === product.name).quantity += product.quantity;
            } else {
                products.push(product);
            }
        }
    });

    products.forEach(p => {
        console.log(p.describe());
    });
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);