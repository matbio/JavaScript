// var cores = new Array();
var cores = ["Azul", "Amarelo", "Vermelho", "Verde", "Laranja", "Roxo", "Branco", "Preto"]

cores.push("Banana") // Inclui um item na array

// cores.pop() apaga o ultimo registro da array
// cores.shift() apaga o primeiro registro da array

console.log(cores)

// Pega o indice e apaga o item correspondente na array
var indice = cores.indexOf('Banana')
cores.splice(indice)

console.log(cores)

// Concatenando arrays

var novas_cores =  ["Cinza", "Rosa", "Marrom", "Bege"]

var todas_cores = cores.concat(novas_cores)
console.log(todas_cores)
