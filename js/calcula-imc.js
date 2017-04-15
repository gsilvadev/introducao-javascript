var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso   = paciente.querySelector(".info-peso");
    var tdImc = paciente.querySelector(".info-imc");

    var altura = tdAltura.textContent;
    var peso = tdPeso.textContent;

    var alturaValida = alturaEhValida(altura);
    var pesoValido = pesoEhValido(peso);
    var msg = "";

    if(!pesoValido){
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        paciente.classList.add("paciente-invalido");
    }

    msg = pesoValido ? (alturaValida ? "": "Altura inválida!") : (alturaValida ? "Peso inválido!" : "Peso e altura inválidos!");
    
    var imc = msg.length > 0 ? msg : calculaImc(peso, altura);

    tdImc.textContent = imc;
}

function calculaImc(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function pesoEhValido(peso){
    return peso > 0 && peso <= 1000;
}

function alturaEhValida(altura){
    return altura > 0 && altura < 3;
}