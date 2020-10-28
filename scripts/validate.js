const validationParams={
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};


const showError=(input, form,{errorClass, inputErrorClass})=>{
  const errorElement=form.querySelector(`#${input.id}-error`);
  errorElement.textContent=input.validationMessage;
  errorElement.classList.add(errorClass);
  input.classList.add(inputErrorClass);
}

const hideError=(input, form,{errorClass, inputErrorClass})=>{
  const errorElement=form.querySelector(`#${input.id}-error`);
  errorElement.classList.remove(errorClass);
  errorElement.textContent='';
  input.classList.remove(inputErrorClass);
}

const checkInputValidity=(input, form, {errorClass, inputErrorClass})=>{
  if (input.validity.valid) {
    hideError(input, form, {errorClass, inputErrorClass});
  } else {
    showError(input, form, {errorClass, inputErrorClass});
  }
}

const toggleButtonState=(buttonElement, form,{inactiveButtonClass})=>{
  if (form.checkValidity()) {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled=false;
  }
  else {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled=true;
  }
}

const setEventListeners=(form, {inputSelector, submitButtonSelector, ...rest})=>{
  const inputElements=Array.from(form.querySelectorAll(inputSelector));
  const buttonElement=form.querySelector(submitButtonSelector);

  inputElements.forEach((input)=>{
    input.addEventListener('input',(event)=>{
      checkInputValidity(event.target, form,  {...rest});
      toggleButtonState(buttonElement, form, {...rest});
    });
  });
  toggleButtonState(buttonElement, form, {...rest});
}

const enableValidation=({formSelector, ...rest})=>{
  const formElements=Array.from(document.querySelectorAll(formSelector));

  formElements.forEach(form=>{
    form.addEventListener('submit', event=>{
      event.preventDefault();
    })
    setEventListeners(form, {...rest});
  });
}

enableValidation(validationParams);



