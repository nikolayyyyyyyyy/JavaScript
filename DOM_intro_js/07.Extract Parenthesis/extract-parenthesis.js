function extract(content) {
    debugger
    const element = document.querySelector('#' + content);

    const match = element.textContent.match(/\(([A-Za-z ]+)\)/g)

    if (match) {
        console.log(match.join(", "));
    }
}