function solve(input) {
    class Hero {
        constructor(name, level) {
            this.name = name;
            this.level = level;
        }
    }

    const heroes = input.map(e => {
        const hero = new Hero(e.split(" / ")[0], Number.parseInt(e.split(" / ")[1]));
        if (e.split(" / ").length === 3) {
            hero.items = [];
            hero.items.push(...e.split(" / ").splice(2)[0].split(", "));
        }
        return hero;
    });

    heroes.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);

        hero.items ? console.log(`items => ${hero.items.join(", ")}`) : "";
    });
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);