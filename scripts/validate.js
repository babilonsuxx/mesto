
const validationParams={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}


const showError=(input, form)=>{
  const errorElement=form.querySelector(`#${input.id}-error`);
  errorElement.textContent=input.validationMessage;
  errorElement.classList.add(validationParams.errorClass);
  input.classList.add(validationParams.inputErrorClass);
}

const hideError=(input, form)=>{
  const errorElement=form.querySelector(`#${input.id}-error`);
  errorElement.classList.remove(validationParams.errorClass);
  errorElement.textContent='';
  input.classList.remove(validationParams.inputErrorClass);
}

const checkInputValidity=(input, form)=>{
  if (input.validity.valid) {
    hideError(input, form);
  } else {
    showError(input, form);
  }
}

const toggleButtonState=(buttonElement, form)=>{
  if (form.checkValidity()) {
    buttonElement.classList.remove(validationParams.inactiveButtonClass);
    buttonElement.disabled=false;
  }
  else {
    buttonElement.classList.add(validationParams.inactiveButtonClass);
    buttonElement.disabled=true;
  }
}

const setEventListeners=(form)=>{
  const inputElements=Array.from(form.querySelectorAll(validationParams.inputSelector));
  const buttonElement=form.querySelector(validationParams.submitButtonSelector);

  inputElements.forEach((input)=>{
    input.addEventListener('input',(event)=>{
      checkInputValidity(event.target, form);
      toggleButtonState(buttonElement, form);
    });
  });
  toggleButtonState(buttonElement, form);
}

const enableValidation=()=>{
  const formElements=Array.from(document.querySelectorAll(validationParams.formSelector));

  formElements.forEach(form=>{
    form.addEventListener('submit', event=>{
      event.preventDefault();
    })
    setEventListeners(form);
  });
}

enableValidation();



