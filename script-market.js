/**
 * [x] obter o texto da input
 * [X] adicionar a classe hidden em todos os cards
 * [X] remover a classe hidden do card com base no texto da input
 * [ ] jogar o card para o topo da pagina
 */

function search(){
    let input = document.getElementById("search").value
    
    document.getElementById("btc").classList.add("hidden")
    document.getElementById("eth").classList.add("hidden")
    document.getElementById("doge").classList.add("hidden")
    document.getElementById("xrp").classList.add("hidden")
    document.getElementById("car").classList.add("hidden")

    document.getElementById(input).classList.remove("hidden")
}