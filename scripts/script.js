const editButton = document.querySelector('.profile__edit-button');


const popup = document.querySelector('.popup');
const exitButton = document.querySelector('.popup__exit-button');

const form = document.querySelector('.form');
const submitButton = document.querySelector('.form__submit-button');


const titleInput = form.querySelector('.form__input_text_title');
const subtitleInput = form.querySelector('.form__input_text_subtitle');


const titleValue = document.querySelector(".profile__title");
const subtitleValue = document.querySelector(".profile__subtitle");

//Toggle Form Handlers
const toggleForm = () => {
    popup.classList.toggle('popup_visible');
    if (popup.classList.contains('popup_visible')) {
        titleInput.value = titleValue.textContent;
        subtitleInput.value = subtitleValue.textContent;
    }
}

editButton.addEventListener('click', toggleForm);
exitButton.addEventListener('click', toggleForm);


const fillForm = (evt) => {
    evt.preventDefault();
    titleValue.textContent = titleInput.value;
    subtitleValue.textContent = subtitleInput.value;
    toggleForm();
}

form.addEventListener('submit', fillForm);


