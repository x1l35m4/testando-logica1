import Imagem from '../../components/Image/Image.js';
import { allClientes, formatStyle, addTagLinkNoHead } from '../../utils.js';
import Comentario from '../../components/Comentario/Comentario.js';


export default function SectionEstaFalando() {
  const URL = "/assets/json/clientes.json";
  let htmlBase = /*HTML*/`<section id="sectionClientes" class="section-estao-falando"></section>`;
  let clientes = []
  addTagLinkNoHead(".\\assets\\js\\sections\\SectionEstaFalando\\style.css");

  allClientes().then((dados)=>{
    clientes = dados;

   const html = /*HTML*/`
      <div class="section-esta-falando__container">
          <h2 style="margin:0">
            O QUE NOSSOS CLIENTES
          </h2>
          <h3 style="margin:0">
            ESTÃO FALANDO SOBRE NÓS.
          </h3>
          ${
           clientes.length>0?  
          clientes.map((cliente) => {
            return Comentario(cliente);
           }).join("")
           :
           /*HTML*/`
            <p>Nenhum cliente foi encontrado</p>
            `
          }
          <p>
          Garanta o Dobro de Clientes com uma <br>
          Estrutura 100% Personalizada para 
          Seu Produto ou Serviço!
          </p>
          <div style="text-align:center; width:100%; margin-top:1rem">
            <button style="margin: 0 auto">
              Quero crescer mais
            </button>
          </div>
      </div>
  `;
   document.getElementById("sectionClientes").innerHTML = html;
  });

  return htmlBase;
}

