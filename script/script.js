const burger = document.getElementsByClassName('burger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
const nav = document.getElementsByTagName('nav')[0]
const body = document.getElementsByTagName('body')[0]
    //toggle nav
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-burger-active');
        nav.classList.toggle('nav-burger-active_nav-color');
        body.classList.toggle('body');
    })
    //animate links