const burger = document.getElementsByClassName('burger')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]
    //toggle nav
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-burger-active')
    })
    //animate links