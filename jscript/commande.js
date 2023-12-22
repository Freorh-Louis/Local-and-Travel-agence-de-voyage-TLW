// fichier JavaScript pour la page de payement
// Louis Vincent - Hugo Prigent
// 22/12/2023
// To do: fini


// Fonction permettant d'afficher le montant à payer'
// entree : l'URL
// sortie : le texte d'un titre html modifier avec le montant à payer

function afficher_prix() {
    const u = new URLSearchParams(window.location.search);
    document.getElementById("montant").textContent += u.get("prix") + " €";
}