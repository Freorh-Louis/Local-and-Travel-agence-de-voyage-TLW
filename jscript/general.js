// Fichier d'une simple fonction qui definit le header et le footer
// Louis Vincent - Hugo Prigent
// 21/12/2023
// To do: fini


//fonction definissant le footer et header de manière dynamique
// entree : aucune
// sortie : affiche un header et un footer dynamique

function header_footer() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
}

