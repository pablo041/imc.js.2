const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso, você precisa em gorda cassete.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns continue assim!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso, precisa fazer uma dieta ou um exercício fisíco';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I, está precisando uma dieta';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II, está precisando de uma atividade fisíca e uma dieta acredite no seu potencial nada é impossível';
        }else {
            classificacao = 'com obesidade grau III. Cuidado vamos fazer uma atvidade ou algo para esmagrecer e acredite no seu potencial nada é impossível!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);