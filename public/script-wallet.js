/**
 * FORM COMPRAR CRYPTO
 * 
 * armazenar a quantidade atual de crypto em $ (presente na label) com base na moeda selecionada
 * 
 * verificar se os campos estão preenchidos
 * verificar se o nome é válido
 * verificar se o cvv tem somente 3 digitos
 * verificar se o numero do cartão tem 16+4 digitos (0000 0000 0000 0000)
 * verificar se a data não venceu
 * 
 * adicionar o valor de AMOUNT na label do saldo atual
 */

/**
 * FORM VENDER CRYPTO
 * 
 * armazenar a quantidade atual de crypto em $ (presente na label) com base na moeda selecionada
 * 
 * verificar se os campos estão preenchidos
 * verificar se o cvv tem somente 3 digitos
 * verificar se o numero do cartão tem 16+4 digitos (0000 0000 0000 0000)
 * 
 * subtrair o valor de AMOUNT na label do saldo atual
 */

/**
 * PROBLEMAS
 * 
 * o window.confirm() já fica disponivel quando há um só campo preenchido no form
 * preciso que ele apareça somente quando todos estiverem preenchidos corretamente
 * para isso, preciso verificar o valor de cada input e só depois acioná-lo
 */

var scope = "";

var acquireOperation = {
    amount: document.getElementById("acquireAmount"),
    name: document.getElementById("name"),
    cvv: document.getElementById("acquireCvv"),
    number: document.getElementById("acquireCardNumber"),
    date: document.getElementById("date")
}

var sellOperation = {
    amount: document.getElementById("sellAmount"),
    cvv: document.getElementById("sellCvv"),
    number: document.getElementById("sellCardNumber")
}

var modalAcquire = document.getElementById("modalAcquire")
modalAcquire.classList.add("hidden")

var modalSell = document.getElementById("modalSell")
modalSell.classList.add("hidden")

var modalBackground = document.getElementsByClassName("modal-background")[0]
modalBackground.classList.add("hidden")

function openModalAcquire(){
    modalBackground.classList.remove("hidden")
    modalAcquire.classList.remove("hidden")
}

function closeModalAcquire(){
    modalBackground.classList.add("hidden")
    modalAcquire.classList.add("hidden")
    formClear()
}

function openModalSell(){
    modalBackground.classList.remove("hidden")
    modalSell.classList.remove("hidden")
}

function closeModalSell(){
    modalBackground.classList.add("hidden")
    modalSell.classList.add("hidden")
    formClear()
}

function getName(card){
    scope = card;
    let div = card.getElementsByClassName("price")[0]
    let price = Number(div.getElementsByClassName("money")[0].innerHTML)
    getValuesAcquire(price)
    getValuesSell(price)
}

function validateFormAcquire(){
    for (const key of Object.keys(acquireOperation)) {
        acquireOperation[key].classList.remove("input-err")
        if (!acquireOperation[key].value) {
            acquireOperation[key].classList.add("input-err")
        }
    }
    if (!acquireOperation.name.value.match(/[a-zA-Z]/)) {
        acquireOperation.name.classList.add("input-err")
    }
    if (!acquireOperation.cvv.value.match(/[0-9]{3}/)) {
        acquireOperation.cvv.classList.add("input-err")
    }
    if (!acquireOperation.number.value.match(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/)){
        acquireOperation.number.classList.add("input-err")
    }
    if (
        acquireOperation.amount.value &&
        acquireOperation.name.value &&
        acquireOperation.cvv.value &&
        acquireOperation.number.value &&
        acquireOperation.date.value
    ) {
        if(window.confirm("are you sure you want to buy?")){
            getValuesAcquire()
        }
    }
}

function validateFormSell(){
    for (const key of Object.keys(sellOperation)) {
        sellOperation[key].classList.remove("input-err")
        if (!sellOperation[key].value) {
            sellOperation[key].classList.add("input-err")
        }
    }
    if (!sellOperation.cvv.value.match(/[0-9]{3}/)) {
        sellOperation.cvv.classList.add("input-err")
    }
    if (!sellOperation.number.value.match(/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/)) {
        sellOperation.number.classList.add("input-err")
    }
    if (
        sellOperation.amount.value &&
        sellOperation.cvv.value &&
        sellOperation.number.value
    ) {
        if(window.confirm("are you sure you want to sell?")){
            getValuesSell()
        }
    }
}

function getValuesAcquire(cryptoPrice){
    let price = cryptoPrice || Number(scope.getElementsByClassName("price")[0].getElementsByClassName("money")[0].innerHTML)
    let amount = Number(document.forms["acquireForm"].elements[0].value)
    let element = scope.getElementsByClassName("price")[0].getElementsByClassName("money")[0]
    let result = price + amount
    if (result < 0) {
        result = 0
    }
    element.innerHTML = (result).toFixed(2)
    closeModalAcquire()
}

function getValuesSell(cryptoPrice){
    let price = cryptoPrice || Number(scope.getElementsByClassName("price")[0].getElementsByClassName("money")[0].innerHTML)
    let amount = Number(document.forms["sellForm"].elements[0].value)
    let element = scope.getElementsByClassName("price")[0].getElementsByClassName("money")[0]
    let result = price - amount
    if (result < 0) {
        result = 0
    }
    element.innerHTML = (result).toFixed(2)
    closeModalSell()
}

function formClear() {
    for (const key of Object.keys(acquireOperation)) {
        acquireOperation[key].classList.remove("input-err")
    }
    for (const key of Object.keys(sellOperation)) {
        sellOperation[key].classList.remove("input-err")
    }
    document.getElementById("acquireForm").reset()
    document.getElementById("sellForm").reset()
}