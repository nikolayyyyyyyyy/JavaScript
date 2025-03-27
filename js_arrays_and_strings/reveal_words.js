function revealWords(words, text) {
    const arr = words.split(',');
    const matches = text.match(/(\*+)/g);

    for (const match of matches) {

        if (arr.some(n => n.length == match.length)) {
            text = text
                .replace(match, arr.find(n => n.length == match.length));
        }
    }

    return text;
}

console.log(revealWords("great,learning", "softuni is ***** place for ******** new programming languages"));