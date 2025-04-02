function solve(input) {
    class Cource {
        constructor(name, capacity) {
            this.name = name;
            this.capacity = capacity;
            this.students = [];
        }
    }

    class Student {
        constructor(username, credits, email) {
            this.username = username;
            this.credits = credits;
            this.email = email;
        }
    }
    const cources = [];

    input.forEach(e => {
        if (e.includes(": ")) {

            if (!cources.some(c => c.name === e.split(": ")[0])) {

                cources.push(new Cource(e.split(": ")[0], Number.parseInt(e.split(": ")[1])));
            } else {

                const cource = cources.find(c => c.name === e.split(": ")[0]);
                cource.capacity += Number.parseInt(e.split(": ")[1]);
            }
        } else {
            const studentName = e.split(" ")[0].split("[")[0];
            const credits = Number.parseInt(e.split(" ")[0].split("[")[1].split("]")[0]);
            const email = e.split(" ")[3];
            const join = e.split(" ")[e.split(" ").length - 1];

            if (cources.some(e => e.name === join)) {
                const cource = cources.find(e => e.name === join);

                if (cource.students.length < cource.capacity) {
                    const student = new Student(studentName, credits, email, join);
                    cource.students.push(student);
                }
            }
        }
    });

    cources.sort((a, b) => b.students.length - a.students.length).forEach(e => {

        console.log(`${e.name}: ${e.capacity - e.students.length} places left`);
        e.students.sort((a, b) => b.credits - a.credits)
            .forEach(s => {

                console.log(`--- ${s.credits}: ${s.username}, ${s.email}`);
            })
    });
}


solve(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']);