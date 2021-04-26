const editButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.form');
const exitButton = document.querySelector('.form__exit-button');
const submitButton = document.querySelector('.form__submit-button');

const formInput = document.querySelector('.form__container');
const titleInput = formInput.querySelector('.form__title');
const subtitleInput = formInput.querySelector('.form__subtitle');


const titleValue = document.querySelector(".profile__title");
const subtitleValue = document.querySelector(".profile__subtitle");

//Toggle Form Handlers
const toggleForm = () => form.classList.toggle('form_visible');
editButton.addEventListener('click', toggleForm);
exitButton.addEventListener('click', toggleForm);

formInput.addEventListener('submit', evt => {
    evt.preventDefault();
    titleValue.textContent = titleInput.value;
    subtitleValue.textContent = subtitleInput.value;
    toggleForm();
});


