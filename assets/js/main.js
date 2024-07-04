import Header from './sections/Header/Header.js';
import SectionTop from './sections/SectionTop/SectionTop.js'
import SectionEstaoFalando from './sections/SectionEstaFalando/SectionEstaFalando.js'
import Footer from './sections/Footer/Footer.js';
import {carregaCss} from './utils.js';

const app = document.querySelector("#app");
carregaCss("./assets/css/main.module.css");

document.addEventListener("DOMContentLoaded", ()=>{
  render();
})


function render(){
  let html = /*HTML*/`
   <div>
    ${Header()}
    ${SectionTop()}
    ${SectionEstaoFalando()}
    ${Footer()}
   </div>
  `
  app.innerHTML = html
}