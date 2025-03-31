function solve(input) {
    class Employee {
        constructor(name) {
            this.name = name;
        }

        describe() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.name.length}`);
        }
    }
    const employees = input.map(e => {
        return new Employee(e);
    });

    employees.forEach(e => {
        e.describe();
    });
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);