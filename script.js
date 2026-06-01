document.getElementById("btnSaibaMais").addEventListener("click", function(){

    alert(
        "O Agro Forte utiliza tecnologia, inovação e sustentabilidade para transformar o campo."
    );

});

function animarContador(id, valorFinal){

    let contador = 0;

    const elemento = document.getElementById(id);

    const intervalo = setInterval(() => {

        contador += Math.ceil(valorFinal / 100);

        if(contador >= valorFinal){
            contador = valorFinal;
            clearInterval(intervalo);
        }

        elemento.textContent = contador.toLocaleString("pt-BR");

    }, 20);

}

animarContador("hectares", 25000);
animarContador("clientes", 1500);
animarContador("projetos", 850);
