// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio
let campoCidade = document.querySelector("#cidade");
let elemntoMensagem = document.querySelector("#mensagem");
let elementoCidades = document.querySelector("#cidades");
let elementoPrevisao = document.querySelector("#previsao")

campoCidade.addEventListener("keydown", function(evento){
    if(evento.key=="Enter"){
        buscarCidades()
    }
});
  

async function buscarCidades(){
    elemntoMensagem.textContent="busacando..."
    let nome = campoCidade.value;
    //buscando resposta da api
    let resposta= await fetch(`https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`);
    
    //enquanto a api n retorna aparece que esta bucando 
    
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
        elemntoMensagem.textContent= dados.message;
        console.log("Not Found")
    }
}

async function buscarPrevisao(id){
    let resposta= await fetch(`https://brasilapi.com.br/api/cptec/v1/clima/previsao/${id}`);
    elementoPrevisao.textContent= "Buscando..."

    let dados =await resposta.json()

    if (resposta.ok){
        elementoPrevisao.innerHTML=`
            <div class="dia">
                <h2>Cidade ${dados.cidade} - ${dados.estado}</h2>
                <p>Data: ${formatarData(dados.clima[0].data)}<p/>
                <p>Condição: ${dados.clima[0].condicao_desc}</p>
                <p>Temperatura mínima: ${dados.clima[0].min}°C</p>
                <p>Temperatura maxima: ${dados.clima[0].max}°C</p>
                <p>Indice UV: ${dados.clima[0].indice_uv}</p>
            </div>
        `


    }else{
        elemntoMensagem.textContent = dados.menssage
    }
}

function formatarData(data){
    let partes = data.split("-")
    return `${partes[2]}/${partes[1]}/${partes[0]}`
}