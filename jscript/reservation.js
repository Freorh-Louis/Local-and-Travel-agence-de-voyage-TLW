
class Destination{
    constructor(ville, img0, img1, img2, img3, price){
    this._ville  = ville;
    this._img0  = img0;
    this._img1  = img1;
    this._img2 = img2;
    this._img3 = img3;
    this._price = price;
}
}


/*
var tableau = {brehat : ["Ile-de-Bréhat","brehat_principale","brehat_1","brehat_2","brehat_3",30], 
etretat : ["Etretat","etretat_principale","etretat_1","etretat_2","etretat_3",30],
veules : ["Veules-les-roses", "veules_principale","veules_1","veules_2","veules_3",25],
zalipie : ["Zalipie","zalipie_principale","zalipie_1","zalipie_2","zalipie_3",30],
trujilo : ["Trujilo","trujilo_principale","trujilo_1","trujilo_2","trujilo_3",35],
loguivy : ["Loguivy de la mer","loguivy_principale","loguivy_1","loguivy_2","loguivy_monument",15],
morella : ["Morella","morella_principale","morella_1","morella_2","morella_3",40],
bled : ["Bled", "bled_principale","bled_1","bled_2","bled_3",40]};
 */


tab2 = [
    new Destination("Ile-de-Bréhat","brehat_principale","brehat_1","brehat_2","brehat_3",30),
    new Destination("Etretat","etretat_principale","etretat_1","etretat_2","etretat_3",30),
    new Destination("Veules-les-roses", "veules_principale","veules_1","veules_2","veules_3",25),
    new Destination("Zalipie","zalipie_principale","zalipie_1","zalipie_2","zalipie_3",30),
    new Destination("Trujilo","trujilo_principale","trujilo_1","trujilo_2","trujilo_3",35),
    new Destination("Loguivy de la mer","loguivy_principale","loguivy_1","loguivy_2","loguivy_monument",15),
    new Destination("Morella","morella_principale","morella_1","morella_2","morella_3",40),
    new Destination("Bled", "bled_principale","bled_1","bled_2","bled_3",40)
];

function updateDest() {
    u = new URLSearchParams(window.location.search);
    ville = u.get("dest");
    for (var i = 0; i < 8; i++) {
        if (tab2[i]._ville === ville) {
            var nom = tab2[i]._ville;
            let image0 = document.createElement("img");
            let image1 = document.createElement("img");
            let image2 = document.createElement("img");
            let image3 = document.createElement("img");
            image0.src = tab2[i]._img0;
            image1.src = tab2[i]._img1;
            image2.src = tab2[i]._img2;
            image3.src = tab2[i]._img3;
            document.getElementById("img_grid").appendChild(image0);
            document.getElementById("img_grid").appendChild(image1);
            document.getElementById("img_grid").appendChild(image2);
            document.getElementById("img_grid").appendChild(image3);
            }
    }
    document.getElementById("myp").textContent += " " + nom;

    let hidden_dest_input = document.getElementById("reservation_form").querySelector("[name=dest]");
    hidden_dest_input.setAttribute("value", ville)
}



function prixF() {
    for (var i = 0; i < 8; i++) {
        if (tab2[i]._ville === ville) {
            var prix_jour = tab2[i]._price;
        }
    }
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

/*
function updateDest() {
    u = new URLSearchParams(window.location.search);
    ville = u.get("dest");
    let nom = tableau[ville][0];
    document.getElementById("myp").textContent += " " + nom;

    for (var i = 0; i < 4; i++) {
        let image = document.createElement("img")
        image.src = tableau[ville][i + 1];
        document.getElementById("img_grid").appendChild(image);
    }

    let hidden_dest_input = document.getElementById("reservation_form").querySelector("[name=dest]");
    hidden_dest_input.setAttribute("value", ville)
}



function prixF() {
    let prix_jour = tableau[ville][5];
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
*/

