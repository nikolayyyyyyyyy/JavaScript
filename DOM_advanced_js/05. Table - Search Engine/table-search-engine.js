function solve() {
   debugger
   const list = [...document.querySelectorAll('table tbody tr')];

   list.forEach(e => {
      e.classList.remove('select');

      if (e.textContent.toLowerCase().includes(document.querySelector('#searchField').value.toLowerCase())) {

         e.classList.add('select');
      }
   });
}