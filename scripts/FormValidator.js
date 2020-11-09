class FormValidator {

  constructor(validationParams, formSelector) {
    this.validationParams=validationParams;
    this.form=document.querySelector(formSelector);
  }

  _setEventListeners(form, { inputSelector, submitButtonSelector, ...rest }) {
    this.inputElements = Array.from(form.querySelectorAll(inputSelector));
    this.buttonElement = form.querySelector(submitButtonSelector);

    this.inputElements.forEach((input) => {
      input.addEventListener("input", (event) => {
        this._checkInputValidity(event.target, form, { ...rest });
        this.toggleButtonState(this.buttonElement, form, { ...rest });
      });
    });
    this.toggleButtonState(this.buttonElement, form, { ...rest });
  }

  _checkInputValidity(input, form, { errorClass, inputErrorClass }) {
    if (input.validity.valid) {
      this.hideError(input, form, { errorClass, inputErrorClass });
    } else {
      this._showError(input, form, { errorClass, inputErrorClass });
    }
  }

  toggleButtonState(buttonElement, form, { inactiveButtonClass }) {
    if (form.checkValidity()) {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _showError(input, form, { errorClass, inputErrorClass }) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }

  hideError(input, form, { errorClass, inputErrorClass }) {
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
    input.classList.remove(inputErrorClass);
  }

  enableValidation() {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this._setEventListeners(this.form, this.validationParams);

  }

}
 export {FormValidator};
