var botao = document.querySelector("#btn-busca-pacientes");

botao.addEventListener("click", function(event){
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function(){
        var status = xhr.status;
        var erro = document.querySelector("#erro-busca-pacientes");
        try {
            erro.classList.add("invisivel");
            var resultado = xhr.responseText;
            var pacientes = JSON.parse(resultado);

            pacientes.forEach(function(paciente) {
                inserePacienteNaTabela(paciente);
            });
        } catch (error) {
            erro.classList.remove("invisivel");
        }
    });

    xhr.send();
});