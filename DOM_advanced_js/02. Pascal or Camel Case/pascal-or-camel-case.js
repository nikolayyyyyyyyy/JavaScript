function solve() {
  debugger
  const textElement = [...document.querySelector('#text')
    .value
    .toLowerCase()
    .split(" ")];

  const convention = document
    .querySelector('#naming-convention').value;

  const result = document
    .querySelector('#result');

  if (convention === 'Camel Case') {

    result.textContent = textElement.map((e, i) => {
      if (i === 0) {
        return e.charAt(0).toLowerCase() + e.slice(1).toLowerCase();
      } else {
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
      }
    }).join("");
  } else if (convention === 'Pascal Case') {

    result.textContent = textElement
      .map(e => e.charAt(0).toUpperCase() + e.slice(1))
      .join("");
  } else {

    result.textContent = "Error!"
  }
}