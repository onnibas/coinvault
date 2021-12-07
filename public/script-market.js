function search(){
    let input = document.getElementById("search").value
    
    document.getElementById("btc").classList.add("hidden")
    document.getElementById("eth").classList.add("hidden")
    document.getElementById("doge").classList.add("hidden")
    document.getElementById("xrp").classList.add("hidden")
    document.getElementById("ada").classList.add("hidden")
    
    if(!input){
        document.getElementById("btc").classList.remove("hidden")
        document.getElementById("eth").classList.remove("hidden")
        document.getElementById("doge").classList.remove("hidden")
        document.getElementById("xrp").classList.remove("hidden")
        document.getElementById("ada").classList.remove("hidden")
    }
    else{
        document.getElementById(input).classList.remove("hidden")
    }

}