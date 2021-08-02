var texto = "Uma string"
var inteiro = 1
var decimal = 5.5
var boleana = true
var array = ['item1', 'item2', 'item3']

console.log("Var tipo:" + typeof texto)
console.log("Var tipo:" + typeof inteiro)
console.log("Var tipo:" + typeof decimal)
console.log("Var tipo:" + typeof boleana)
console.log("Var tipo:" + typeof array)

document.getElementById("item1").append("Var Valor: " + texto + " Var tipo: " + typeof texto)
document.getElementById("item2").append("Var Valor: " + inteiro + " Var tipo: " + typeof inteiro)
document.getElementById("item3").append("Var Valor: " + decimal + " Var tipo: " + typeof decimal)
document.getElementById("item4").append("Var Valor: " + boleana + " Var tipo: " + typeof boleana)
document.getElementById("item5").append("Var Valor: " + array + " Var tipo: " + typeof array)