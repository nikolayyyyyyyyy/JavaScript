function extractText() {
    const lists = document.querySelectorAll('li');
    const textarea = document.querySelector('textarea');
    textarea.value = [...lists].map(e => e.textContent.trim()).join("\n");
}