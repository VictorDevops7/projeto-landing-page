var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55"
    
}

function RolarParaEsquerda(){
    Leonardo.style ="display: flex"
    Bruna.style = "displey: none"
    setaDireita.style = "diplay:flex; margin-top:55"
    setaEsquerda.style = "display:none"
}



