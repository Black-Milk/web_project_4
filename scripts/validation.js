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

