function solve() {
   debugger
   const elements = [...document.querySelectorAll('#towns li')];
   const searchedValue = document.querySelector('#searchText').value;
   const res = document.querySelector('#result');

   elements.forEach(e => {
      if (e.textContent.includes(searchedValue)) {

         e.style.textDecoration = 'underline';
         e.style.fontWeight = 'bold';
      }
   });

   res.textContent = `${elements
      .filter(e => e.textContent.includes(searchedValue)).length} matches found`;
}