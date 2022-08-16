//# Exercício 3

//Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

for (let i=0; i<maioresPaises.length; i++){
console.log(`Lista de maiores países: ${i+1} ${maioresPaises[i]}`);
} //POR QUE O i++ NÃO FUNCIIONOU E O i+1 FUNCIONOU?
