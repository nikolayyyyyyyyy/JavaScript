function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    const cats = input.reduce((acc, e) => {
        const props = e.split(" ");
        const cat = new Cat(props[0], Number.parseInt(props[1]));

        acc.push(cat);
        return acc;
    }, []);

    cats.forEach(cat => {
        console.log(`${cat.meow()}`);
    });
}

solve(['Mellow 2', 'Tom 5']);