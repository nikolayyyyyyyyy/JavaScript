function substring(word, text) {
    return text.toLowerCase().includes(word)
        ?
        text.toLowerCase().substring(text.indexOf(word), text.indexOf(word) + word.length)
        :
        `${word} not fount.`;
}


console.log(substring('javascript', 'JavaScript is the best programming language'));
