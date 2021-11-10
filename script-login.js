function validateForm(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        document.getElementById("email").classList.add("input-err");
        document.getElementById("email-err").classList.remove("hidden");
    }

    if (!password){
        document.getElementById("password").classList.add("input-err");
        document.getElementById("password-err").classList.remove("hidden");
    }

    if (email && password){
        window.location="./index-home.html";
    }
}