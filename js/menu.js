const toggleMenu = () => {
    const menuCont = document.querySelector('.menu');
    const menuToggler = document.querySelector('.hamburger');
    const cover = document.querySelector('.cover');
    menuCont.classList.toggle('menu--active');
    menuToggler.classList.toggle('is-active');
    cover.classList.toggle('cover--hidden');
}
