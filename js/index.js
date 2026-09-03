// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio https://brasilapi.com.br/api/cptec/v1/cidade/${}
let campoCidade = document.querySelector("#cidade");
let elemntoMensagem = document.querySelector("#mensagem");
let elementoCidades = document.querySelector("#cidade");
let elementoPrevisao = document.querySelector("#previsao")

campoCidade.addEventListener("Keydown", function(evento){
    if(evento.code==="Enter"){

    };
})

async function buscarCidades(){
    let nome = campoCidade.value;
    //buscando resposta da api
    let resposta= await fetch(`https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`);
    //enquanto a api n retorna aparece que esta bucando 
    elemntoMensagem.textContent="busacando..."
    let dados = await resposta.json();
    if(resposta.ok ){
        //percorre a lista de cidades que a api retornou 
        for(let i = 0; i<dados.length; i++){
            //faz a impressao dos dados no corpo do site
            let elemntoCidade = document.createElement("p");
            elemntoCidade.textContent=`${dados[i].nome} - ${dados[i].estado}`
            elemntoCidade.classList.add("cidade")
            elemntoCidade.addEventListener("click", function(){
                buscarPrevisao(dados[i].id)
            })
            elementoCidades.appendChild(elemntoCidade)
        }
        elemntoMensagem.textContent= "";
    }
    else{     
        // quando aparecer o codigo 404 aparece que nem uma cidade foi encontrada   
        elemntoMensagem.textContent= dados.menssage;
        console.log("Not Found")
    }
}

async function buscarPrevisao(id){
    let resposta= await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${id}`);

    let dados =await resposta.json()

    if (resposta.ok){

    }else{
        elemntoMensagem.textContent = dados.menssage
    }
}