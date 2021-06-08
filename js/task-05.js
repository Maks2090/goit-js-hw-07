
const refs = {
  nameInut:  document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
}

 refs.nameInut.addEventListener('input', () => {
    if (refs.nameInut.value.trim() === '') {
     refs.textSpan.textContent = "незнакомец";
    return};
  
       refs.textSpan.textContent = refs.nameInut.value


 });

 

  
