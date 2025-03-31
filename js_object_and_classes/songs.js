function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    const numberOfSongs = Number.parseInt(input[0]);
    const songs = input.splice(1);
    const created = [];
    for (let i = 0; i < numberOfSongs; i++) {
        const args = songs[i].split("_");
        const song = new Song(args[0], args[1], args[2]);

        created.push(song);
    }

    const searched = songs[songs.length - 1];

    if (searched !== "all") {
        created.filter(e => e.typeList === searched).forEach(e => {
            console.log(e.name);
        });
    } else {
        created.forEach(e => {
            console.log(e.name);
        })
    }
}

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);