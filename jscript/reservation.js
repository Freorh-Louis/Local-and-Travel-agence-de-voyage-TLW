// Fichier des fonctions destinations
// Louis Vincent - Hugo Prigent
// 21/12/2023
// To do:



// Fonction permettant d'afficher la page de reservation en fonction de la destination choisie
// entree : aucune
// sortie : affichage de la page d'une destination choisie 

async function updateDest() {
    const u = new URLSearchParams(window.location.search);
    ville = u.get("dest");
    const response = await fetch("../tab.json");
    json = await response.json();

    let nom = json.tableau_reservation[ville][0];
   

    
    if (json.tableau_reservation[ville][7]){
        parisiens = " oui "
        } 
    else {
        parisiens = " non "
    }
   
    
    if (json.tableau_reservation[ville][6]){
        animaux = " oui ";} 
    else {
        animaux = " non ";
    }
     
    if (json.tableau_reservation[ville][8]){
        ptitdej = " oui ";} 
    else {
        ptitdej = " non ";
    }
    
    
    
    
    document.getElementById("auto_parisiens").textContent += await parisiens;
    document.getElementById("auto_animaux").textContent += animaux;
    document.getElementById("ptitdej").textContent += ptitdej;
    document.getElementById("myp").textContent += nom;
    
    var template = document.getElementById("template_photo");
    
    for (var i = 0; i < 4; i++){
        
        let clone = document.importNode(template.content, true);
        new_content = clone.firstElementChild.innerHTML
            .replace(/{{image}}/g, json.tableau_reservation[ville][i + 1])
            .replace(/{{alt}}/g, "image " + json.tableau_reservation[ville][i + 1]);
        clone.firstElementChild.innerHTML = new_content;
        document.getElementById("img_grid").appendChild(clone);
    }
    
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("arrivee").setAttribute("min", today);
    document.getElementById("depart").setAttribute("min", today);
    
    
    let hidden_dest_input = document.getElementById("reservation_form").querySelector("[name=dest]");
    hidden_dest_input.setAttribute("value", ville);
}


// Fonction calculant le prix d'un reservation
// entree : aucune
// sortie : prix du voyage (entier)

function prixF() {
    let prix_jour = json.tableau_reservation[ville][5];
    let arrivee = new Date(document.getElementById("arrivee").value);
    let depart = new Date(document.getElementById("depart").value);
    let nbr_jour = (depart.getTime() - arrivee.getTime()) / (1000 * 3600 * 24);
    let parents = document.getElementById("parents").value;
    let enfants = document.getElementById("enfants").value;
    let ptitdej = document.getElementById("ptitdej").checked;
    let prix = nbr_jour * parents * prix_jour + 0.4 * nbr_jour * enfants * prix_jour + nbr_jour * (Number(parents) + Number(enfants)) * 15 * ptitdej;
    document.getElementById("prix").value = `${prix} €`;
    let hidden_prix_input = document.getElementById("reservation_form").querySelector("[name=prix]");
    hidden_prix_input.setAttribute("value", prix)
}




