function solve(input) {
    class User {
        constructor(name) {
            this.name = name;
        }
    }
    class Movie {
        constructor(name) {
            this.name = name;
            this.comments = [];
        }
    }
    class Comment {
        constructor(title, content, user) {
            this.title = title;
            this.content = content;
            this.user = user;
        }
    }

    const movies = [];
    const users = [];

    input.forEach(e => {
        if (e.includes("posts on")) {

            const username = e.split(" ")[0];
            const movieName = e.split(" ").splice(3)[0].split(":")[0];

            if (users.some(e => e.name === username) && movies.some(e => e.name === movieName)) {
                const movie = movies.find(e => e.name === movieName);
                const user = users.find(e => e.name === username);
                const comment =
                    new Comment(e.split(": ")[1].split(", ")[0], e.split(": ")[1].split(", ")[1], user);

                movie.comments.push(comment);
            }
        } else if (e.startsWith("user")) {

            if (!users.includes(e.split(" ")[1])) {

                const user = new User(e.split(" ")[1]);
                users.push(user);
            }
        } else if (e.startsWith("article")) {

            if (!movies.includes(e.split(" ")[1])) {

                const moovie = new Movie(e.split(" ")[1]);
                movies.push(moovie);
            }
        }
    });

    movies.sort((a, b) => b.comments.length - a.comments.length)
        .forEach(e => {
            e.comments.sort((a, b) => a.user.name.localeCompare(b.user.name));
            console.log(`Comments on ${e.name}`);
            e.comments.forEach(c => {

                console.log(`--- From user ${c.user.name}: ${c.title} - ${c.content}`);
            });
        });
}

solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);