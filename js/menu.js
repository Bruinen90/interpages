const toggleMenu = () => {
    const menuCont = document.querySelector('.menu');
    const menuToggler = document.querySelector('.hamburger');
    menuCont.classList.toggle('menu--active');
    menuToggler.classList.toggle('is-active');
    console.log('click')
}
