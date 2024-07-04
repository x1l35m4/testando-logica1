import {formatStyle, addTagLinkNoHead} from '../../utils.js';

export default function Footer(){
  addTagLinkNoHead(".\\assets\\js\\sections\\Footer\\style.css");
   
  let html = /*HTML*/`
   <footer id="contato" class="footer">
      <div class="footer__content">
          <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
          <ul class="footer__content--links">
            <li>
             <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
          </ul>
      </div>
    </footer>
  `;
  return html;
}

