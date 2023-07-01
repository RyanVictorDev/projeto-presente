function validarsenha(){
    let senha = document.getElementById("senha").value;
    let url = "index.html";


    if (senha.length < 21){
        alert("A senha deve ter pelo menos 21 caracteres, baby");
        return;
    } if (senha != "wefellinloveinoctuber") {
        alert("Senha errada, querida ;)");
        return;
    } if(senha == "wefellinloveinoctuber") {
        window.open(url, "_blank");
    }
}