const burgerBtn = document.getElementById('burger-menu')
const header = document.getElementById('header')

burgerBtn.addEventListener('click', () =>  {
    header.classList.toggle ('open')
})