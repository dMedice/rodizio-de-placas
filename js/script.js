function verificarRodizio () {
    const finalPlaca = parseInt(document.getElementById("finalPLaca").value);
    const horarioAtual = parseInt(document.getElementById("horarioAtual").value);
    const diaSemana = document.getElementById("diaSemana").value;
    const tipoAutomovel = document.getElementById("tipoAutomovel").value;
    const tipoVia = document.getElementById("tipoVia").value;
    const texto = document.querySelector("h3");

    //Placa 1 e 2 - segunda
    if ((finalPlaca >= 1 && finalPlaca <= 2) &&
        (diaSemana == "Segunda-Feira") && 
        (tipoAutomovel == "Carro") && 
        (tipoVia == "Área Vermelha" || tipoVia == "Limite Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else if ((finalPlaca >= 1 && finalPlaca <= 2) && 
        (diaSemana == "Segunda-Feira") && 
        (tipoAutomovel == "Caminhão") && 
        (tipoVia == "Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    }  
    //Placa 3 e 4 - terça
    else if ((finalPlaca >= 3 && finalPlaca <= 4) &&
        (diaSemana == "Terça-Feira") && 
        (tipoAutomovel == "Carro") && 
        (tipoVia == "Área Vermelha" || tipoVia == "Limite Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else if ((finalPlaca >= 3 && finalPlaca <= 4) && 
        (diaSemana == "Terça-Feira") && 
        (tipoAutomovel == "Caminhão") && 
        (tipoVia == "Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } 
    //Placa 5 e 6 - quarta
    else if ((finalPlaca >= 5 && finalPlaca <= 6) &&
        (diaSemana == "Quarta-Feira") && 
        (tipoAutomovel == "Carro") && 
        (tipoVia == "Área Vermelha" || tipoVia == "Limite Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else if ((finalPlaca >= 5 && finalPlaca <= 6) && 
        (diaSemana == "Quarta-Feira") && 
        (tipoAutomovel == "Caminhão") && 
        (tipoVia == "Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } 
    //Placa 7 e 8 - quinta
    else if ((finalPlaca >= 7 && finalPlaca <= 8) &&
        (diaSemana == "Quinta-Feira") && 
        (tipoAutomovel == "Carro") && 
        (tipoVia == "Área Vermelha" || tipoVia == "Limite Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else if ((finalPlaca >= 7 && finalPlaca <= 8) && 
        (diaSemana == "Quinta-Feira") && 
        (tipoAutomovel == "Caminhão") && 
        (tipoVia == "Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    }
    //Placa 9 e 0 - sexta
    else if ((finalPlaca >= 9 && finalPlaca <= 0) &&
        (diaSemana == "Sexta-Feira") && 
        (tipoAutomovel == "Carro") && 
        (tipoVia == "Área Vermelha" || tipoVia == "Limite Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else if ((finalPlaca >= 9 && finalPlaca <= 0) && 
        (diaSemana == "Sexta-Feira") && 
        (tipoAutomovel == "Caminhão") && 
        (tipoVia == "Área Vermelha") && 
        (horarioAtual >= 7 && horarioAtual <= 10) || (horarioAtual >= 17 && horarioAtual<= 20)
    )  {
        texto.innerHTML = "Você não pode rodar normalmente";
    } else {
        texto.innerHTML = "Você pode rodar normalmente";
    }
}