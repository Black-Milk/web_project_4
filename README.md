# Project 4: Around The U.S.

### Overview
This project focuses on the creation of a responsive image gallery, leveraging techniques in html, css, javascript, 
and best practices by Yandex.

[Page Link](https://black-milk.github.io/web_project_4/)

**Todos**
1. Fix positioning of `form__exit-button` for screen width less than 380px. 

**Questions for Reviewer**
1. Not sure what you mean by implementing the popup and popup container to contain the form and exit button separately. Can you please elaborate some more? I tried implementing this, but it made the nesting of more additional elements complicated, especially when trying to toggle the form via javascript.

**Figma Specs**

* [Link to the project in Figma](https://www.figma.com/file/mUgu8OSHWE0M6p6vfwmdu9/Sprint-4-Around-The-U.S.-desktop-mobile?node-id=0%3A1)


**Technology Used**

HTML, CSS, & Javascript

**Project BEM Structure:**
```
├── card
│   ├── __image
│   │   └── card__image.css
│   ├── __info
│   │   └── card__info.css
│   ├── __like-button
│   │   └── card__like-button.css
│   ├── __text
│   ├── __title
│   │   └── card__title.css
│   └── card.css
├── cards
│   ├── __grid
│   │   └── cards__grid.css
│   └── cards.css
├── footer
│   ├── __copyright
│   │   └── footer__copyright.css
│   └── footer.css
├── form
│   ├── __container
│   │   └── form__container.css
│   ├── __exit-button
│   │   └── form__exit-button.css
│   ├── __fields
│   │   └── form__fields.css
│   ├── __header
│   │   └── form__header.css
│   ├── __input
│   │   ├── _subtitle
│   │   ├── _title
│   │   └── form__input.css
│   ├── __submit-button
│   │   └── form__submit-button.css
│   ├── _visible
│   │   └── form_visible.css
│   └── form.css
├── header
│   ├── __logo
│   │   └── header__logo.css
│   └── header.css
├── page
│   └── page.css
└── profile
    ├── __add-button
    │   └── profile__add-button.css
    ├── __container
    │   └── profile__container.css
    ├── __edit-button
    │   └── profile__edit-button.css
    ├── __info
    │   └── profile__info.css
    ├── __picture
    │   └── profile__picture.css
    ├── __picture-container
    │   └── profile__picture-container.css
    ├── __subtitle
    │   └── profile__subtitle.css
    ├── __text
    │   └── profile__text.css
    ├── __title
    │   └── profile__title.css
    └── profile.css
```

