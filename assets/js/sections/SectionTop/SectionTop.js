import { addTagLinkNoHead} from '../../utils.js'

export default function SectionTop() {
  addTagLinkNoHead("\\assets\\js\\sections\\SectionTop\\style.css");

  let html = /*HTML*/`
  <section class="section-top" id="sectionTop">
    <div class="sectionTop__container">
        <h2>
         Landing Pages Personalizadas para
        </h2>
        <h3>
          Aumentar Suas Vendas Exponencialmente!
        </h3>
        <p>
          Garanta o Dobro de Clientes com uma 
          Estrutura 100% Personalizada para 
          Seu Produto ou Serviço!
        </p>
        <button>
          Solicitar orçamento
        </button>
    </div>
  </section>
  `;

  return html;
}
