//Declarations
const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
];


const cardGrid = document.querySelector(".cards__grid");

const editButton = document.querySelector('.profile__edit-button');
const titleValue = document.querySelector(".profile__title");
const subtitleValue = document.querySelector(".profile__subtitle");

const popup = document.querySelector('.popup');
const exitButton = popup.querySelector('.popup__exit-button');

const form = document.querySelector('.form');
const submitButton = form.querySelector('.form__submit-button');
const titleInput = form.querySelector('.form__input_text_title');
const subtitleInput = form.querySelector('.form__input_text_subtitle');


//Functions
const toggleForm = () => {
    popup.classList.toggle('popup_visible');
    if (popup.classList.contains('popup_visible')) {
        titleInput.value = titleValue.textContent;
        subtitleInput.value = subtitleValue.textContent;
    }
}

const fillForm = (evt) => {
    evt.preventDefault();
    titleValue.textContent = titleInput.value;
    subtitleValue.textContent = subtitleInput.value;
    toggleForm();
}

const createCardElement = (card) => {
    //Get a reference to template element
    const cardTemplate = document.querySelector("#card-template").content;
    //Clone content of card template
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    // Set Image and Title
    cardElement.querySelector('.card__image').style.backgroundImage = `url(${card.link})`;
    cardElement.querySelector('.card__title').textContent = card.name;

    return cardElement;
}

const renderCard = (card, wrapper) => {
    const cardElement = createCardElement(card);
    wrapper.append(cardElement);
}



// Handlers
editButton.addEventListener('click', toggleForm);
exitButton.addEventListener('click', toggleForm);
form.addEventListener('submit', fillForm);


initialCards.forEach(card => renderCard(card, cardGrid));


