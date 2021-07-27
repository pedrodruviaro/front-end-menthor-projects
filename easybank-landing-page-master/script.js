const hamgurger = document.querySelector('.hamgurger')
const menu = document.querySelector('.header__aside')
const buttonClose = document.querySelector('.button-close')

hamgurger.addEventListener('click', () => {
    menu.classList.remove('invisible')

    hamgurger.classList.add('invisible')
})

buttonClose.addEventListener('click', () => {
    menu.classList.add('invisible')
    hamgurger.classList.remove('invisible')
})

