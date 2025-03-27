function explodeAndPrintOccurance(text, word) {
    const words = text.split(' ');

    let count = 0;
    for (const w of words) {
        if (w == word) {
            count++;
        }
    }
    return count;
}


console.log(explodeAndPrintOccurance('This is a word and it also is a sentence', 'is'));