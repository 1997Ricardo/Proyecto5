import './style.css'
import  Header  from "./components/Header/Header.js";
import  Nav from "./components/NavBar/Nav.js"
import Hero from "./components/Hero/Hero.js"
import Services from './components/Servicios/Services.js';
import Contact from './components/Contact/Contact.js';

const init = () => {
  document.body.innerHTML += Header()
  document.body.innerHTML += Nav()
  document.body.innerHTML += Hero()
  document.body.innerHTML += Services()
  document.body.innerHTML += Contact()

};

document.addEventListener("DOMContentLoaded", () =>{
  init();
});