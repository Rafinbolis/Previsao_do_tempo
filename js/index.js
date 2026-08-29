// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio



function acao (evento){
    let entrada= document.querySelector("#cidade").value;
    if (evento.key=="Enter"){
        console.log(entrada)
    }
}