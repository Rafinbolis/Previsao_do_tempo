// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio
let campoCidade = document.querySelector("#cidade");

campoCidade.addEventListener("keydown", async function () {

    if(evento.key === "Enter"){
        let entrada = campoCidade.value;
        let cidade = await pegarCidade(entrada);
        console.log(cidade)
    }
})


async function pegarCidade(nome){
    let dadoscidade = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/cidade/${nome}`
    ); 
    if (nomecidade.ok){
        console.log("deu certo");
        console.log(dadoscidade.value)
        return(dadoscidade);
    }
    else{
        console.log("deu red");
    }  
}