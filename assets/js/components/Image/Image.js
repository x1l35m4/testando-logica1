import { formatStyle } from '../../utils.js'

export default function Imagem(src = "", borderRadius = 0) {
  const style = localStyle();

  let html = /*HTML*/`
    <img src="${src}" style="${style.imagem(borderRadius)}"/>
  `;
  return html;
}

function localStyle() {
  return {
    container() {
      return formatStyle(`
     width:100%;
     display: flex;
     justify-content: space-between;
     align-items: center;
     align-content: left;
     border: 1px solid #000000;
     color: #ff0000;
     background-color: #aaaaaa;
    `)
    },

    imagem(borderRadius = 0) {
      return formatStyle(`
      max-width: 100%;
      height: auto;
      border-radius:${borderRadius}rem;
      `)
    }
  }
}