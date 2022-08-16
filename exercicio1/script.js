//# Exercício 1

//Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

let salgado = prompt("Você deseja comer mais uma coxinha? \nS \nN").toUpperCase()

let conta = 0
const valorSalgado = 2.50

while (salgado !== 'N'){
    //salgado = 2.50 // Dá erro usar atribuição de valores diferentes a uma única variável?
    conta = conta + valorSalgado;  console.log("Soma do valor do salgado: ", conta)
    salgado = prompt("Você deseja comer mais uma coxinha? \nS \nN").toUpperCase()
}
console.log(conta = conta)

//Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.




