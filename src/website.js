import './style.css';
import Hero from './resturant-hero.jpg';

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const resturantName = document.createElement('h1');
  resturantName.classList.add('resturant-name');
}

const myHero = new Image();
myHero.src = Hero;
