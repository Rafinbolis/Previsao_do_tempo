// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio
let campoCidade = document.querySelector("#cidade")

async function pegarCidade(event){
    if(event.key==="Enter"){
        let cidade = await fatch(
            ``
        )
        console.log("deu certo")
        console.log(campoCidade.value)
    }

}