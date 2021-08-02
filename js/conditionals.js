var idade = prompt('Qual sua idade?');

if (idade >= 18) {
    document.getElementById("condif").append(" Posso ir ao show da Cardi B, pois tenho " + idade)
}
else if (idade < 18 && idade >= 14) {
    document.getElementById("condif").append(" Posso ir ao show da blackpink, pois tenho " + idade)
}
else {
    document.getElementById("condif").append(" Posso ir ao show da Xuxa, pois tenho " + idade)
}

switch (idade) {
    case "10":
        document.getElementById("condswitch").append(" Não paga, mas precisa de acompanhante, pois tem " + idade + " anos")
    break;
    case "11":
        document.getElementById("condswitch").append(" Paga, mas precisa de acompanhante, pois tem " + idade + " anos")
    break;
    case "12":
        document.getElementById("condswitch").append("Não paga, mas não precisa de acompanhante, pois tem " + idade + " anos")
    break;
    case "14":
        document.getElementById("condswitch").append("Paga, mas não precisa de acompanhante, pois tem " + idade + " anos")
    break;
    default:
        document.getElementById("condswitch").append(" Não pode ir, pois tem " + idade + " anos")
    break;
}
