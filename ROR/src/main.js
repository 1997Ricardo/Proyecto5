import './style.css'
import  Header  from "./components/Header/Header.js";
import  Nav from "./components/NavBar/Nav.js"
import Hero from "./components/Hero/Hero.js"
import Services from './components/Servicios/Services.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import Footer from './components/Footer/Footer.js';



const init = () => {
  document.body.innerHTML += Header()
  document.body.innerHTML += Nav()
  document.body.innerHTML += Hero()
  document.body.innerHTML += Services()
  document.body.innerHTML += About()
  document.body.innerHTML += Contact()
  document.body.innerHTML += Footer()

};

document.addEventListener('DOMContentLoaded', () => {
  init();

})
  // Añadir toggle en header
  const headerInner = document.querySelector('.header-inner');
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
  headerInner.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
  });