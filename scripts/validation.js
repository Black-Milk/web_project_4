/*
FOR REVIEWER:
The assignment specifically states that the enableValidation function must take the object represented by validationArtefacts
as an argument; however, no mention is made of the object being used an argument in the other functions.
Why is there a need a to pass this is in as an argument to other functions if it is never modified within their scope?
It simply remains constant, so what is the benefit of passing it in as an additional argument?
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

const showInputError = (formElement, inputElement, errorMessage, artefacts) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorElement.textContent);
    inputElement.classList.add(artefacts.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(artefacts.errorClass);
};


const hideInputError = (formElement, inputElement, artefacts) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(artefacts.inputErrorClass);
    errorElement.classList.remove(artefacts.errorClass);
    errorElement.textContent = "";
};


const checkInputValidity = (formElement, inputElement, artefacts) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, artefacts);

    } else {
        hideInputError(formElement, inputElement, artefacts);
    }
};


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, artefacts) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(artefacts.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(artefacts.inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

const setEventListeners = (formElement, artefacts) => {
    const inputList = Array.from(formElement.querySelectorAll(artefacts.inputSelector));
    const buttonElement = formElement.querySelector(artefacts.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, artefacts);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            checkInputValidity(formElement, inputElement, artefacts);
            toggleButtonState(inputList, buttonElement, artefacts);
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
            setEventListeners(fieldset, artefacts);
        });
    });
};

enableValidation(validationArtefacts);