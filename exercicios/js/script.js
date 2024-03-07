function validar() {
    // alert("enviou os dados");
    const nome = document.querySelector("#nome");
    const sobrenome = document.querySelector("#sobrenome");
    const cpf = document.querySelector("#cpf");
    const cidade = document.querySelector("#cidade");
    const estado = document.querySelector("#estado");

    if (nome.value == "") {
        alert("erro nome vazio");
        return false;
    }

    if (sobrenome.value == "") {
        alert("erro sobrenome vazio");
        return false;
    }

    if (cpf.value == "") {
        alert("erro cpf vazio");
        return false;
    }

    if (cidade.value == "") {
        alert("erro cidade vazia");
        return false;
    }
    
    if (estado.value == "") {
        alert("erro estado vazio");
        return false;
    }

    alert("Sucesso")
    

}