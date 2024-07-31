var setaDireita = window.document.getElementById("seta-direita")
var leornado = window.document.getElementById("leonardo")
var samabtha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsqueda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leornado.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsqueda.style = "display:flex; margin-top:55px" 
}

function RolarParaEsqueda() {
    leornado.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:40px"
    setaEsqueda.style = "display:none"  
}