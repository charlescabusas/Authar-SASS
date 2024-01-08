const headerNav = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".burger__btn");
const burgerBtn2 = document.querySelector(".burger__btn__close");
const overlay = document.querySelector(".menu__overlay");
burgerBtn.addEventListener("click", ()=>{
    burgerBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
    overlay.classList.toggle("open");
});
burgerBtn2.addEventListener("click", ()=>{
    burgerBtn2.classList.toggle("open");
    headerNav.classList.toggle("open");
});
overlay.addEventListener("click", ()=>{
    overlay.classList.toggle("open");
    headerNav.classList.toggle("open");
});
const links = document.querySelectorAll(".nav__pages h4");
links.forEach((link) =>{
    link.addEventListener("click", ()=>{
        link.nextElementSibling.classList.toggle("open");
        link.querySelector("i").classList.toggle("open");
    })
});
