/* 
Faça um programa, com uma função que necessite de três argumentos: 
dois números e um sinal de operador matemático (+, -, * ou /). 
Ela deve fazer o cálculo indicado pelo operador usando os dois número passados.
*/

function calculadora(operador, num1, num2){
    if(operador === "+"){
        let soma = num1+num2;
        console.log(`A soma é igual a: ${soma}`);
    }else if(operador === "-"){
        let sub = num1-num2;
        console.log(`A subtração  é igual a: ${sub}`);
    }else  if(operador === "*"){
        let multi = num1*num2;
        console.log(`A multiplicação é igual a: ${multi}`);
    }else  if(operador === "/"){
        let divisao = num1/num2;
        console.log(`A divisão é igual a: ${divisao}`);
    } 
}

calculadora("-", 10, 30);