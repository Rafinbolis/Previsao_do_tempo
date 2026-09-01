// consultar uma cidade pelo nome na api e verificar sua temperatura, tema do exercicio
let campoCidade = document.querySelector("#cidade");

async function pegarCidade(event){
    if(event.key==="Enter"){

        // buscando na api as informações da cidade escrita dentro do imput
        let cidade = await fetch(
            `https://brasilapi.com.br/api/cptec/v1/cidade/${campoCidade.value}`
        );
           
        //tranforma os dados obtidos da api em um array e pega só o valor do id para inserir na requisição da api de tempo
        let dadosCidade =  await cidade.json();
        let id = dadosCidade.map(dadosCidade => dadosCidade.id);

        //atraves da api com o id pega as informações sobre o tempo na cidade solicitada 
        let tempo = await fetch(
            `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${id}`
        );

        let dadosTempo = await tempo.json();
        let clima = dadosTempo.clima[0];

        console.log(dadosCidade[0]);
        console.log(id);
        console.log(dadosTempo)
        console.log(clima)
    }   

}