/* 
Faça um programa que solicite o total gasto pelo cliente de uma loja, 
imprima as opções de pagamento com os valores totais, 
solicite a opção desejada e imprima o valor total das prestações (se houverem). 
Ao final ele deve retornar o valor total da opção escolhida, 
guardar em uma lista e recomeçar a operação perguntando o valor total gasto pelo próximo cliente. 
Quando o valor informado for 0, significa que não há mais clientes, 
então ele chamar uma nova função que vai mostrar quantas compras foram feitas em cada opção, 
e a soma do valor total de todas elas.
Opção 1: a vista com 10% de desconto
Opção 2: em duas vezes (preço da etiqueta)
Opção 3: de 3 até 10 vezes com 3% de juros ao mês (somente para compras acima de R$ 100,00).
*/

const prompt = require("prompt-sync")();
console.clear();

const listaComprasOp1 = [];
const listaComprasOp2 = [];
const listaComprasOp3 = [];
let valorParcelado;

function valorCompra() {
  let valor;
  while (valor != 0) {
    valor = +prompt("Digite o valor da compra: [0] para parar.");
    if (valor === 0) {
      qtdComprasEmCadaOpcao();
      break;
    }
    let valorOp1 = valor - valor * 0.1;
    let valorOp2 = valor / 2;
    console.log(`Sua compra ficou em R$ ${valor}. Temos 3 opções de pagamento disponíveis:
    Opção 1: a vista com 10% de desconto,
    Opção 2: duas vezes de R$ ${valorOp2} cada ou,
    Opção 3: de 3 a 10 vezes com 3% de juros ao mês.`);

    opcao = +prompt("Digite a opção desejada (1,2,3): ");
    if (opcao === 1) {
      console.log(
        `Você escolheu a opção 1 e sua compra dará um total de: R$ ${valorOp1}`
      );
      listaComprasOp1.push(valor);
    } else if (opcao === 2) {
      console.log(
        `Você escolheu a opção 2 e sua compra dará um total de duas parcelas de R$ ${valorOp2} cada.`
      );
      listaComprasOp2.push(valor);
    } else if (opcao === 3) {
      let qtdParcelas = +prompt(
        "Voce selecionou a opção 3. Digite quantas parcelas deseja: "
      );
      valorParcelado = valor;
      for (let i = 0; i < qtdParcelas; i++) {
        valorParcelado = valorParcelado + valorParcelado * 0.03;
      }
      console.log(
        `A sua compra de R$ ${valor} será dividida em ${qtdParcelas} vezes, e cada parcela será de R$ ${(
          valorParcelado / qtdParcelas
        ).toFixed(2)} totalizando R$ ${valorParcelado.toFixed(2)}`
      );
      listaComprasOp3.push(valorParcelado);
    }
  }
}

function qtdComprasEmCadaOpcao() {
  let totalOp1 = 0;
  let totalOp2 = 0;
  let totalOp3 = 0;
  for (let i = 0; i < listaComprasOp1.length; i++) {
    totalOp1 = totalOp1 + listaComprasOp1[i];
  }
  for (let i = 0; i < listaComprasOp2.length; i++) {
    totalOp2 = totalOp2 + listaComprasOp2[i];
  }
  for (let i = 0; i < listaComprasOp3.length; i++) {
    totalOp3 = totalOp3 + listaComprasOp3[i];
  }
  console.log(`Tivemos ao total: 
  ${
    listaComprasOp1.length
  } compras na opção 1, totalizando R$ ${totalOp1} reais;
  ${
    listaComprasOp2.length
  } compras na opção 2, totalizando R$ ${totalOp2} reais;
  ${listaComprasOp3.length} compras na opção 3, totalizando R${totalOp3.toFixed(
    2
  )} reais. `);
}

valorCompra();
