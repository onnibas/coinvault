function search(){
    let input = document.getElementById("search").value
    console.info(input)
    
    document.getElementById("btc").classList.add("hidden")
    document.getElementById("eth").classList.add("hidden")
    document.getElementById("doge").classList.add("hidden")
    document.getElementById("xrp").classList.add("hidden")
    document.getElementById("ada").classList.add("hidden")

    document.getElementById(input).classList.remove("hidden")
}