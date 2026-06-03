
let contador = 0;

const visorNumero = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnZerar = document.getElementById("btnZerar");

function atualizarPainel() {
    visorNumero.textContent = contador;


    if (contador > 0) {
        visorNumero.style.color = "green";
    } else if (contador < 0) {
        visorNumero.style.color = "red";
    } else {
        visorNumero.style.color = "black"; 
    }
}

btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarPainel();
});

btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarPainel();
});

btnZerar.addEventListener("click", function() {
    contador = 0;
    atualizarPainel();
});
