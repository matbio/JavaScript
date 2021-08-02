
function Soma() {
    var v1 = document.getElementById("v1").value;
    var v2 = document.getElementById("v2").value;
    var total = parseInt(v1) + parseInt(v2)
    document.getElementById("total").append("O total é igual a " + total)   
}