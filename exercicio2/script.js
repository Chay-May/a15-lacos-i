//# Exercício 2

//Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.

let tabuada = +prompt("Digite o numero para criar a tabuada")
while (isNaN(tabuada)) /*IsNan = SE NÃO FOR NÚMERO*/ {
    tabuada = +prompt("Numero inválido tente novamente")
} //CONDIÇÃO PARA CASO NÃO SEJA NÚMERO - VALIDADOR
let multiplicacao = 0
for (let i = 1; i <= 10; i++) {
    multiplicacao =  tabuada * i
    console.log(`${tabuada} * ${i} = ${multiplicacao}`)
    console.log("-".repeat(30))
}
console.log('Bons estudos')

/*let mult = +prompt("Digite um número")

for(let i = 1; i <= 10; i++){
    console.log(mult*i);
}*/