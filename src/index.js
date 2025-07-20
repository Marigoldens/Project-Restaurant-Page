//index.js
import './style.css';
import {loadMenuPageFunc} from './menu.js';
import {loadHomePageFunc} from './homepage.js';
import {loadAboutPageFunc} from './about.js';


//<button class="home">Home</button>
//<button class="menu">Menu</button>
//<button class="about">About</button>


const homeBtn = document.querySelector('.home')
const menuBtn = document.querySelector('.menu')
const aboutBtn = document.querySelector('.about')

loadHomePageFunc()


homeBtn.addEventListener('click', () => {
    loadHomePageFunc()
})

menuBtn.addEventListener('click', () => {
    loadMenuPageFunc()
})

aboutBtn.addEventListener('click', () => {
    loadAboutPageFunc()
})