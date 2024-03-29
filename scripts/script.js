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

//Wrapper
const cardGrid = document.querySelector(".cards__grid");

//Modals
const profileModal = document.querySelector('.popup_type_edit-profile');
const addCardModal = document.querySelector('.popup_type_add-card');
const previewModal = document.querySelector('.popup_type_preview');
const modals = document.querySelectorAll('.popup');


//Other DOM Elements
const profileTitleValue = document.querySelector(".profile__title");
const profileSubtitleValue = document.querySelector(".profile__subtitle");

const profileForm = document.querySelector('.form_type_edit-profile');
const profileFormTitleInput = profileForm.querySelector('.form__input_text_title');
const profileFormSubtitleInput = profileForm.querySelector('.form__input_text_subtitle');

const cardForm = document.querySelector('.form_type_add-card');
const cardFormNameInput = cardForm.querySelector('.form__input_text_card-name');
const cardFormLinkInput = cardForm.querySelector('.form__input_text_image-link');

const previewImageTitle = previewModal.querySelector('.popup__image-title');
const popupImage = previewModal.querySelector('.popup__image');

//Buttons
const addCardButton = document.querySelector('.profile__add-button');
const addCardModalExitButton = addCardModal.querySelector('.popup__exit-button_target_add-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileModalExitButton = profileModal.querySelector('.popup__exit-button_target_edit-profile');
const previewModalExitButton = previewModal.querySelector('.popup__exit-button_target_preview');


//Functions
const toggleModal = (modal) => {
    modal.classList.toggle('popup_visible');
    if (modal.classList.contains('popup_visible')) {
        document.addEventListener('keydown', onEscapeModal);
        // console.log('Escape Key Listener Added');
    } else {
        document.removeEventListener('keydown', onEscapeModal);
        // console.log('Escape Key Listener Removed');
    }
}

const onEditProfile = (modal) => {
    if (modal.classList.contains('popup_visible')) {
        profileFormTitleInput.value = profileTitleValue.textContent;
        profileFormSubtitleInput.value = profileSubtitleValue.textContent;
    }
    toggleModal(modal);
}

const onImagePreview = (card) => {

    popupImage.src = card.link;
    //replace whitespace w/ hyphens
    popupImage.alt = card.name.toLowerCase().replace(/\s/g, '-');
    previewImageTitle.textContent = card.name;
    toggleModal(previewModal);
}


const onClickOutsideModal = (evt) => {
    const clickArea = evt.target;
    if (!clickArea.classList.contains("popup_visible")) {
        return;
    }
    // console.log("Clicked Outside Modal Area");
    toggleModal(clickArea);
}

const onClickExitModalButton = (evt) => {
    if (evt.target.classList.contains('popup__exit-button')) {
        const modal = document.querySelector(".popup_visible");
        // console.log("Clicked Modal Exit Button")
        toggleModal(modal);
    }
}

const onEscapeModal = (evt) => {
    if (evt.key === "Escape") {
        const modal = document.querySelector(".popup_visible");
        // console.log("Escape Key Pressed while Modal Open")
        toggleModal(modal);
    }
}

const fillProfileForm = (evt) => {
    evt.preventDefault();
    profileTitleValue.textContent = profileFormTitleInput.value;
    profileSubtitleValue.textContent = profileFormSubtitleInput.value;
    toggleModal(profileModal);
}

const fillCardForm = (evt) => {
    evt.preventDefault();
    const newCard = {
        name: cardFormNameInput.value,
        link: cardFormLinkInput.value
    };
    renderCard(newCard, cardGrid);
    toggleModal(addCardModal);
    cardForm.reset();
    const submitButton = cardForm.querySelector('.form__submit-button');
    submitButton.classList.add('form__submit-button_inactive');
    submitButton.disabled = true;
}


const toggleLikeButton = (evt) => {
    evt.target.classList.toggle('card__like-button_active');
}


const createCardElement = (card) => {
    //Get a reference to template element
    const cardTemplate = document.querySelector("#card-template").content;
    //Clone content of card template
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    // Set Image and Title
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    cardImage.style.backgroundImage = `url('${card.link}')`;
    cardTitle.textContent = card.name;

    const cardLikeButton = cardElement.querySelector('.card__like-button');
    const cardDeleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.addEventListener('click', () => onImagePreview(card));
    cardLikeButton.addEventListener('click', (evt) => toggleLikeButton(evt));
    cardDeleteButton.addEventListener('click', () => cardElement.remove());

    return cardElement;
}


const renderCard = (card, wrapper) => {
    wrapper.prepend(createCardElement(card));
}


// Handlers
addCardButton.addEventListener('click', () => toggleModal(addCardModal));
cardForm.addEventListener('submit', fillCardForm);
profileEditButton.addEventListener('click', () => onEditProfile(profileModal));
profileForm.addEventListener('submit', fillProfileForm);
modals.forEach((modal) => {
    modal.addEventListener('click', onClickExitModalButton);
    modal.addEventListener('click', onClickOutsideModal);
})
initialCards.forEach(card => renderCard(card, cardGrid));


