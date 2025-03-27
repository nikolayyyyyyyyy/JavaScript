function printAllSpecialWords(text) {
    const words = text.match(/#[A-Za-z]+/g);
    if (words) {
        words.forEach(word => console.log(word.substring(1, word.length)));
    }
}

printAllSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');