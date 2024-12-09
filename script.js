
const calculo = document.getElementById('calculo');

function imc() {
    const nome = document.getElementById('nome').value;
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
var resultado = document.getElementById('resultado');
    
    if (nome !== '' && altura !== '' && peso !==''){
       const calculo = (peso / (altura * altura )).toFixed(2);

        if (calculo < 17){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está muito abaixo do peso.`;
        } else if (calculo < 18.49){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está abaixo do peso.`;
        }
        else if (calculo <24.99 ){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está com peso ideal.`;
        }
        else if (calculo <29.99 ){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está acima do peso.`;
        }
        else if (calculo <34.99 ){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está com obesidade grau I.`;
        }
        else if (calculo <39.99 ){
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está com obesidade grau II (severa).`;
        }
        else{
            resultado.textContent = `${nome}, o resultado do seu IMC foi de ${calculo} e você está com obesidade grau III (mórbida).`;
        }
     

            

        


     }
    else{
        alert('Preencha todos os campos!');
    }
   

}

calcular.addEventListener('click', imc);