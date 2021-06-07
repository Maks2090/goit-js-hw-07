
const refs = {
  nameInut:  document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
}

 refs.nameInut.addEventListener('input', () => {
    if (refs.nameInut.value.trim() === '') {
        return  (refs.textSpan.textContent = "незнакомец")};
  
       refs.textSpan.textContent = refs.nameInut.value


 });

 

  
