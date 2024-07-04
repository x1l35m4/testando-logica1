import Imagem from '../../components/Image/Image.js'
import {formatStyle, addTagLinkNoHead} from '../../utils.js'

export default function Header() {
 const logoImage = "/assets/img/logo.png"
 addTagLinkNoHead(".\\assets\\js\\sections\\Header\\style.css");

window.addEventListener("load", (evt)=>{
  const vars = getComputedStyle(document.documentElement).getPropertyValue("--header-height");
  const headerHeight = document.querySelector(".header__container");
  document.documentElement.style.setProperty('--header-height', `${headerHeight.clientHeight}px`);

  window.addEventListener("resize", (evt)=>{
    console.log("Resize");
    document.documentElement.style.setProperty('--header-height', `${headerHeight.clientHeight}px`);
  })
}) 
 
  let html = /*HTML*/`
  <header id="header" class="header">
    <div class="header__container">
      <div class="header__container-logo">
        ${Imagem(logoImage)}
      </div>
    <div class="header__container__buttom-menu border__nn">
      <button>MENU</button>
    </div>  
    <div class="header__container-menu border__g">  
      <ul class="header__container-links border__b">
        <li>
          <a href="#">Início</a>
          <a href="#">Itens</a>
          <a href="#">sobre</a>
          <a href="#contato">contato</a>
        </li>
      </ul>
     </div>
    </div>
  </header>
  `;
  return html;
}