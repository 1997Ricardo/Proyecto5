import './style.css'
import  Header  from "./components/Header/Header.js";
import  Nav from "./components/NavBar/Nav.js"
import Hero from "./components/Hero/Hero.js"

const init = () => {
  document.body.innerHTML += Header()
  document.body.innerHTML += Nav()
  document.body.innerHTML += Hero()


};

document.addEventListener("DOMContentLoaded", () =>{
  init();
});