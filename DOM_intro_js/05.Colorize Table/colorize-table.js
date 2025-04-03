function colorize() {
    debugger

    const elements = document.querySelectorAll('table tbody tr');

    elements.forEach((e, i) => {
        if ((i + 1) % 2 === 0) {
            e.style.backgroundColor = 'teal';
            console.log("bbbbb");

        }
    });

    console.log(elements);
}