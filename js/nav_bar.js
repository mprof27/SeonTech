// == SHOW AND HIDE NAV MENU ==//

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// OPEN MENU //
menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// CLOSE MENU //
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)