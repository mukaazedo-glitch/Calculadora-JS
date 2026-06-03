
const formulario = document.getElementById("meuFormulario");
const elementoErro = document.getElementById("erro");


formulario.addEventListener("submit", function(event) {
    // Captura os valores digitados nos inputs
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    
    let erros = [];

    
    if (nome === "") {
        erros.push("O nome não pode estar vazio.");
    }
    
    if (!email.includes("@")) {
        erros.push("O email deve conter '@'.");
    }
    
    if (isNaN(idade) || idade <= 0) {
        erros.push("A idade deve ser maior que 0.");
    }

    
    if (erros.length > 0) {
        event.preventDefault(); 
        elementoErro.textContent = erros.join(" | ");
    } else {
        elementoErro.textContent = ""; 
        alert("Formulário validado com sucesso!");
    }
});
