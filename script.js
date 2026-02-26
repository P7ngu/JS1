function stampaMessaggio() {
    let testo = document.getElementById("messaggio").value;
    let outputDiv = document.getElementById("output");

    // Svuota l'output precedente
    outputDiv.innerHTML = "";

    // Ciclo for per stampare 10 volte
    for (let i = 1; i <= 10; i++) {
        outputDiv.innerHTML += i + ": " + testo + "<br>";
    }
}