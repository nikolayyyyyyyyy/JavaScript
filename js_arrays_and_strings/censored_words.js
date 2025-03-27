function censorText(text, word) {
    return text.replaceAll(word, "*".repeat(word.length))
}

console.log(censorText('A small sentence with some words small', 'small'));