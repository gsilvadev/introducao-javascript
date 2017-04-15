var campoFiltro = document.querySelector("#filtra-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    pacientes.forEach(function(paciente) {
        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        var expressao = new RegExp(campoFiltro.value, "i");
        if(!expressao.test(nome)){
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }
    });
});