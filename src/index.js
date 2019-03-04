import './sass/main.scss';
import './js/svgxuse';
import sendForm from './js/serverless-form';

document.documentElement.lang = navigator.language;

let btn = document.querySelector(".btn--submit");

btn.addEventListener("click", sendForm);

const formButton = document.querySelector(".cta");
const closeForm = document.querySelector('.items__close');
const openNav = document.querySelector('.nav__icon');
const closeNav = document.querySelector('.menu__items__close');
const nav = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav-items');

formButton.addEventListener('click', function() {
    document.querySelector('.all').style.display = 'block';
});

closeForm.addEventListener('click', function() {
    document.querySelector('.all').style.display = 'none'; 
});

openNav.addEventListener('click', function() {
    nav.classList.toggle('hidden');
    
});
closeNav.addEventListener('click', function() {
    nav.classList.toggle('hidden'); 
});

navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
        nav.classList.toggle('hidden');  
    });
});

const scrollChevron = document.querySelector(".icon-chevron-thin-down");
const presentationElement = document.getElementById("presentation");

scrollChevron.addEventListener('click', function() {

    window.scrollTo(0, presentationElement.offsetTop - 40);

});