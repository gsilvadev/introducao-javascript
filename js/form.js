var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var paciente = criaPacienteDoForm(form);

    var erros = validaPaciente(paciente);
    var ulErros = document.querySelector("#mensagens-erro");
    ulErros.innerHTML = "";
    if(erros.length > 0){
        exibeMensagensErro(erros, ulErros);
        return;
    }

    inserePacienteNaTabela(paciente);

    form.reset();
});

function inserePacienteNaTabela(paciente){
    var pacienteTr = criaPacienteTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
}

function criaPacienteDoForm(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(peso, altura)
    }
    return paciente;
}

function criaPacienteTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaPacienteTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaPacienteTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaPacienteTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaPacienteTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaPacienteTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaPacienteTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];
    erros = validaCamposVazios(paciente, erros);
    erros = validaValores(paciente, erros);
    return erros;
}

function validaCamposVazios(paciente, erros){
    if(paciente.nome.length == 0)  erros.push("O nome não pode ser vazio.");
    if(paciente.peso.length == 0)  erros.push("O peso não pode ser vazio.");
    if(paciente.altura.length == 0)  erros.push("A altura não pode ser vazia.");
    if(paciente.gordura.length == 0)  erros.push("A gurdura não pode ser vazio.");

    return erros;
}

function validaValores(paciente, erros){
    if(!pesoEhValido(paciente.peso)) erros.push("O peso é inválido.");
    if(!alturaEhValida(paciente.altura)) erros.push("A altura é inválida.");
    
    return erros;
}

function exibeMensagensErro(erros, ul){
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}