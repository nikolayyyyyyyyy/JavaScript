function solve(input) {
    class Movie {
        constructor(name) {
            this.name = name;
        }
    }
    const movies = [];

    input.forEach(e => {
        if (e.startsWith("addMovie")) {
            if (!movies.some(m => m.name === e.split(" ").splice(1).join(" "))) {
                movies.push(new Movie(e.split(" ").splice(1).join(" ")));
            }
        } else if (e.includes("directedBy")) {
            const movieName = e.substring(0, e.indexOf("directedBy")).trim();
            if (movies.some(m => m.name === movieName)) {
                const movie = movies.find(m => m.name === movieName);
                movie.director = e.substring(e.indexOf("directedBy") + "directedBy".length).trim();
            }
        } else if (e.includes("onDate")) {
            const movieName = e.substring(0, e.indexOf("onDate")).trim();
            if (movies.some(m => m.name === movieName)) {
                const movie = movies.find(m => m.name === movieName);
                movie.date = e.substring(e.indexOf("onDate") + "onDate".length).trim();
            }
        }
    });

    movies.forEach(e => {
        if (e.name && e.director && e.date)
            console.log(JSON.stringify(e));
    })
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);