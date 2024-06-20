var setaDireita = window.document.getElementById("setaDireira")
var Leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function rolarParaDireita(){
    Leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}
function rolarParaEsquerda(){
    Leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}


