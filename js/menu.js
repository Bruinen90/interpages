const toggleMenu = () => {
    const menuCont = document.querySelector('.menu');
    const menuToggler = document.querySelector('.hamburger');
    const cover = document.querySelector('.cover');
    menuCont.classList.toggle('menu--active');
    menuToggler.classList.toggle('is-active');
    cover.classList.toggle('cover--hidden');
}

const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach((item, index) => {
    item.style.transitionDelay = 0.5+index/5+'s';
    item.style.animationDelay = index/4+'s';
})