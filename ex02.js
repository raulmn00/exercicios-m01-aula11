const prompt = require("prompt-sync")();

/* 
Construa uma função que receba uma data no formato DD/MM/AAAA 
e devolva uma string no formato 'D de mesPorExtenso de AAAA'. 
Valide a data e retorne NULL caso a data seja inválida.
*/

function diaMesAno(dia, mes, ano) {
  let mesPorExtenso;
  if (dia > 30) {
    return null;
  }
  if (mes > 12 || mes < 1) {
    return null;
  }
  if (mes === 1) {
    mesPorExtenso = "Janeiro";
  } else if (mes === 2) {
    mesPorExtenso = "Fevereiro";
  } else if (mes === 3) {
    mesPorExtenso = "Março";
  } else if (mes === 4) {
    mesPorExtenso = "Abril";
  } else if (mes === 5) {
    mesPorExtenso = "Maio";
  } else if (mes === 6) {
    mesPorExtenso = "Junho";
  } else if (mes === 7) {
    mesPorExtenso = "Julho";
  } else if (mes === 8) {
    mesPorExtenso = "Agosto";
  } else if (mes === 9) {
    mesPorExtenso = "Setembro";
  } else if (mes === 10) {
    mesPorExtenso = "Outubro";
  } else if (mes === 11) {
    mesPorExtenso = "Novembro";
  } else if (mes === 12) {
    mesPorExtenso = "Dezembro";
  }

  return `${dia} de ${mesPorExtenso} de ${ano}`;
}

let teste = diaMesAno(30, -15, 2000);
console.log(teste);
