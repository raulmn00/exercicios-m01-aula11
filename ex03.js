/*
Escreva uma função para conversão de temperatura. 
Ela deve receber 2 argumentos: um número e um caracter 'C', 'F' ou 'K', 
indicando que a temperatura está em Celsius, Fahrenheit ou Kelvin. 
A função deve exibir a temperatura nas 3 escalas e perguntar qual valor quer retornar.
*/

const prompt = require("prompt-sync")();
console.clear();

function converteTemperatura(numero, escala) {
  let temperaturaCelcius;
  let temperaturaKelvin;
  let temperaturaFahrenheit;

  if (escala === "C") {
    temperaturaCelcius = numero;
    temperaturaKelvin = numero + 273;
    temperaturaFahrenheit = temperaturaCelcius * 1.8 + 32;
    console.log(
      `${temperaturaCelcius} °C equivale a ${(temperaturaFahrenheit).toFixed(2)} °F e ${(temperaturaKelvin).toFixed(2)} K`
    );
  } else if (escala === "F") {
    temperaturaFahrenheit = numero;
    temperaturaKelvin = (temperaturaFahrenheit - 32) * (5 / 9) + 273;
    temperaturaCelcius = (temperaturaFahrenheit - 32) / 1.8;
    console.log(
      `${numero} °F equivale a ${(temperaturaCelcius).toFixed(2)} °C e ${(temperaturaKelvin).toFixed(2)} K`
    );
  } else if (escala === "K") {
    temperaturaKelvin = numero;
    temperaturaCelcius = temperaturaKelvin - 273;
    temperaturaFahrenheit = (temperaturaKelvin - 273) * 1.8 + 32;

    console.log(
      `${numero} K equivale a ${(temperaturaCelcius).toFixed(2)} °C e ${(temperaturaFahrenheit).toFixed(2)} °F`
    );
  }
  let retorno = prompt("Digite a escala de temperatura que deseja retornar (F,K,C): ");
  if(retorno === 'F'){
      return (temperaturaFahrenheit).toFixed(2);
  }else if(retorno === 'C'){
      return (temperaturaCelcius).toFixed(2);
  }else if(retorno === 'K'){
      return (temperaturaKelvin).toFixed(2);
  }else {
      console.log('Valor inválido.');
      prompt();
  }
}

let temperatura = converteTemperatura(100, "F");
console.log(temperatura);
