// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio

function acao (evento){
    let entrada= document.querySelector("#cidade").value;

    if (evento.key=="Enter"){
        cidade = pegarCidade(entrada);
        console.log(entrada);
    }
    return(cidade)
}

async function pegarCidade(nome){
    let nomecidade = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`
    ); 
    if (nomecidade.ok){
        console.log("deu certo");
        console.log(nomecidade.value)
        return(nomecidade);
    }
    else{
        console.log("deu red");
    }  
}