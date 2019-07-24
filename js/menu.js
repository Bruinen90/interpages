const menuCont = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');

const toggleMenu = () => {
    const menuToggler = document.querySelector('.hamburger');
    const cover = document.querySelector('.cover');
    menuCont.classList.toggle('menu--active');
    menuToggler.classList.toggle('is-active');
    cover.classList.toggle('cover--hidden');
    menuItems.forEach(item => {
        item.classList.toggle('resetTransitionDelay')
    })
}

menuItems.forEach((item, index) => {
    item.classList.add('resetTransitionDelay')
    item.style.animationDelay = index/4+'s';
    item.style.transitionDelay = 0.25+index/7.5+'s';
})