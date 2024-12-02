// Criei um evento de cos os dois botões de criar e limpar da pagena
    var btn = document.getElementsByClassName('btn')[0]
    var limpar = document.getElementsByClassName('clear')[0]
    limpar.addEventListener("click", () => {
        let divsContainer = document.querySelector('.section-container')
        divsContainer.innerHTML = ""
})
btn.addEventListener("click", () => {
    /* aqui puxo a section e verifico quantas divs temo valor esperado é 10
     se o valor for verdadeiro ele gera uma animação se for falso a condicional
     executa a função. */
    let divsContainer = document.querySelector('.section-container')
    let itensDiv = divsContainer.querySelectorAll('.itens-container')
    let valor = itensDiv.length
    let corpo = document.getElementsByClassName('corpo')[0]
    corpo.style.height = ""
    if (valor == 10) {
        limpar.classList.toggle('animacao')
    }
    else {
        executar()
    }
})
//
function executar() {
    // Aqui crio e colho todas as informações que vou ultilizar.
    var campo = document.getElementsByClassName("operacao")[0].value
    var lista = ["+", "-", "*", "/"]
    var container = document.getElementsByClassName('section-container')[0]
    var itensContainer;
    var divcontainer;
    var valorPositivo;


    /* Aqui crio os loops que vão gerar os numeros que irão ser calculados
    e adicionados a divs que serão creiados de forma dinamica*/
    for (var i = 0; i < lista.length; i++) {
        if (campo == lista[i]) {
            for (var y = 1; y <= 10; y++) {
                divcontainer = document.createElement("div")
                divcontainer.classList.add('itens-container')
                container.appendChild(divcontainer)
    
                for (var x = 1; x <= 10; x++) {
                    valor = y + lista[i] + x
                    resultado = eval(valor)
                    valorPositivo = Math.abs(resultado)
                    itensContainer = document.createElement("div")

                    if (lista[i] == "/") {
                        itensContainer.innerHTML = `${y} ${lista[i]} ${x} = ${valorPositivo.toFixed(1)}`
                        divcontainer.appendChild(itensContainer)
                    } else {
                        itensContainer.innerHTML = `${y} ${lista[i]} ${x} = ${valorPositivo}`
                        divcontainer.appendChild(itensContainer)
                    }
                }
            }
        }
    }
}





