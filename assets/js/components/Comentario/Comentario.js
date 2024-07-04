import Imagem from '../Image/Image.js'
import { addTagLinkNoHead} from '../../utils.js'

export default function Comentario(cliente) {
  addTagLinkNoHead(".\\assets\\js\\components\\Comentario\\style.css");

  let html = /*HTML*/`
        <div class="comentario__container">
          <div class="comentario__container-dados">
           <div class="comentario__container-foto">
            ${Imagem(cliente.foto, 2)}
           </div>
           <div class="comentario__container-informacoes">
            <h3>${cliente.nome}</h3>
            <span>${cliente.profissao}</span>
           </div>
          </div>
          <div class="comentario__container-comentario">
            <span>Comentário:</span>
            <p>${cliente.comentario}</p>
          </div>
        </div>
  `;

  return html;
}

