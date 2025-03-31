function solve(input) {
    class City {
        constructor(name, latitude, longitude) {
            this.town = name;
            this.latitude = latitude.toFixed(2);
            this.longitude = longitude.toFixed(2);
        }
    }

    const cities = input.map(e => {
        return new City(e.split(" | ")[0],
            Number.parseFloat(e.split(" | ")[1]),
            Number.parseFloat(e.split(" | ")[2]));
    });

    cities.forEach(c => {
        console.log(c);
    });
}


solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);