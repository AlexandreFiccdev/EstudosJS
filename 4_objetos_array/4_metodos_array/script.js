nomes = ["joão", "maria", "ana julia", "roberto"];

let elementoRemovido = nomes.pop(); //armazena a remoção do ultimo elemento

console.log(elementoRemovido); // imprime o elemento removido
console.log(nomes); // imprime a lista com o elemento removido

nomes.push("alexandre"); // adiciona elemento no array no final do array
console.log(nomes); //imprime a lista com o elemento adicionado no final

let primeiroElementoRemovido = nomes.shift(); // armazena a remoção do primeiro elemento
console.log(primeiroElementoRemovido); // imprime o elemento removido
console.log(nomes); //imprime a lista com o primeiro elemento removido

nomes.unshift('fernanda'); // adiciona um elemtento no começo
console.log(nomes); //imprime a lista com o elemento adicionado no começo

console.log(nomes.indexOf('maria')); // imprime qual é o indice no array que ta o elemento
console.log(nomes.lastIndexOf("alexandre")); // imprime qual é o indicine no array que o elemento se encontra por ultimo



let nums = [2,0,4,1,2,3,4,5,6];

console.log(nums.slice(4,6)); // imprimi um novo array apartir do 4 indice do array passado até o indice anterior ao 6
console.log(nums.slice(3)); // imprimi um novo array apartir do indice 3 até o final do array passado
console.log(nums.slice(-3)); // imprimi um novo array com os ultimos 3 elementos do array passado
console.log(nums.slice(2,-3)); // imprimi um novo array apartir do indice 2 até os 3 ultimos indices do array passado, ou seja, imprimi [4,1,2,3]


nomes.forEach(nome => {
    console.log("O nome é "+nome);
}); //é tipo um for simplificado só que pra array

console.log(nomes.includes("fernanda")); // imprime a verificação de que se o elemento contem no array

console.log(nomes.reverse()); //inverte o array

