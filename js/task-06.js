
 const  textInput =  document.querySelector('#validation-input');

 
 textInput.addEventListener('blur', e => {
  if(e.currentTarget.value.length != e.target.dataset.length) {
      e.currentTarget.classList.add('invalid') ||  e.currentTarget.classList.remove('valid')
  }

  else { e.currentTarget.classList.add('valid') ||  e.currentTarget.classList.remove('invalid')};

 
})