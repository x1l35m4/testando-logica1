export function formatStyle(style) {
  return style.
    replaceAll(/\n/g, "").
    replaceAll(/\s{2,}/g, " ")
}

export function addTagLinkNoHead(href) {
  const head = document.querySelector("head");
    if (head.innerHTML.indexOf(href) <= -1) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      document.head.appendChild(link);
    }
    //console.log(head.innerHTML);
}

export function carregaCss(styleDir) {
  fetch(styleDir).then((response) => {
    if (!response.ok) {
      throw new Error("Erro ao carregar css")
    }
    return response.text();
  }).then((result) => {
    //console.log("Result:");
    //console.log(result);
  }).catch((error) => {
    //console.log("Erro ao carregar o arquivo CSS:");
    //console.error(error);
  })
}

export async function allClientes() {
  const URL = "/assets/json/clientes.json";
  let clientes = []

  try{
    const response = await fetch(URL);
    if(!response.ok){
      throw Error(`Response status: ${response.status}`);
    }
    clientes = response.json();    
  } catch(error){
    console.log(error);
  }

  return clientes;
}  


/*
  await fetch(URL).then((response)=>{
    return response;
  }).then((dados)=>{
    clientes = dados.json()
  }).catch((error)=>{ 
    console.log(error);
  })
*/  

  /*
    try{
    const response = await fetch(URL);
    if(!response.ok){
      throw Error(`Response status: ${response.status}`);
    }
    clientes = response.json();    
  } catch(error){
    console.log(error);
  }
  */