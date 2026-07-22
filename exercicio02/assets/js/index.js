const botao = document.getElementById("calcular");

botao.addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const validador = document.getElementById("validador");
    const resultado = document.getElementById("resultado");

    validador.textContent = "";
    resultado.textContent = "";

    if (isNaN(peso) || peso <= 0) {
        validador.textContent = "Peso inválido";
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        validador.textContent = "Altura inválida";
        return;
    }
        
    const imc = peso / (altura*altura);

    let classificao;

    if (imc < 18.5) {
        classificao = 'Abaixo do peso';
    }

    else if (imc < 25) {
        classificao = 'Peso normal'
    }

    else if (imc < 30) {
        classificao = 'Sobrepeso'
    }

    else if (imc < 35) {
        classificao = 'Obesidade grau 1'
    }

    else if (imc < 40) {
        classificao = 'Obesidade grau 2'
    }

    else {
        classificao = 'Obesidade grau 3'
    }

    document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificao}`;

});