function sumTable() {
    const elementsSum =
        [...document.querySelectorAll('table tbody tr')]
            .splice(0, 3)
            .map(e => Number.parseFloat(e.children[1].textContent))
            .reduce((acc, e) => {
                return acc += e
            });

    const element = document.querySelector('table tbody tr:nth-child(4)');
    element.children[1].textContent = elementsSum;
}