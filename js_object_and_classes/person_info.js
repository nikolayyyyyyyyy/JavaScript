const person = {
    name: 'Nikolay',
    lastName: 'Nikolaev',
    age: 26,
    describe() {
        return `First name: ${this.name} Last name: ${this.lastName} Age: ${this.age}`;
    }
};

// console.log(Object.entries(person)[0][1]);

// Object.entries(person).forEach(element => {
//     console.log(element[0]);
//     console.log(element[1]);
// });

const json = JSON.stringify(person);

const secPerson = JSON.parse(json);

console.log(secPerson.name);
