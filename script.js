// Carne = 400g por pessoa +6hrs = 650g
// Cerveja = 1200ml por pessoa +6hrs = 2000ml
// Refrigerante/água = 1000ml por pessoa +6hrs = 1500ml

// crianças vale = 0,5 ou 1/2



let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");


function calcular(){

    console.log("Calculando");


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let quantidadeTotalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${quantidadeTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${quantidadeTotalCerveja / 1000} L de Cerveja</p>`
    resultado.innerHTML += `<p>${quantidadeTotalBebidas / 1000} L de Bebidas</p>`

}


function carnePorPessoa(duracao){

    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }

}

function cervejaPorPessoa(duracao){

    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }

}

function bebidaPorPessoa(duracao){

    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }

}


