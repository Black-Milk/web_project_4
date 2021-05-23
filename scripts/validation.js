/*
FOR REVIEWER:
The assignment specifically states that the enableValidation function must take the object represented by validationArtefacts
as an argument; however, no mention is made of the object being used an argument in the other functions.
Why is there a need a to pass this is in as argument to other functions if it can be seen as a constant in global scope?
*/

const validationArtefacts = {
    formSelector: ".form",
    formFieldSelector: ".form__fields",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit-button",
    inactiveButtonClass: "form__submit-button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
};

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement.textContent);
    inputElement.classList.add(validationArtefacts.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationArtefacts.errorClass);
};


const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(validationArtefacts.inputErrorClass);
    errorElement.classList.remove(validationArtefacts.errorClass);
    errorElement.textContent = "";
};


const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);

    } else {
        hideInputError(formElement, inputElement);
    }
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validationArtefacts.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(validationArtefacts.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(validationArtefacts.inputSelector));
    const buttonElement = formElement.querySelector(validationArtefacts.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
};

const enableValidation = (artefacts) => {
    const formList = Array.from(document.querySelectorAll(artefacts.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        const fieldSetList = Array.from(formElement.querySelectorAll(artefacts.formFieldSelector));
        fieldSetList.forEach((fieldset) => {
            setEventListeners(fieldset);
        });
    });
};

enableValidation(validationArtefacts);