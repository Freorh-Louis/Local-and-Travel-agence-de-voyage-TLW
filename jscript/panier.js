// fichier JavaScript pour la page panier
// Louis Vincent - Hugo Prigent
// 21/12/2023
// To do: fini




// fonction stockage de la reservation une fois faite
// entree : aucune
// sortie : creation d'un tableau avec le bilan de la reservation

function stockage_reservation() {
    const u = new URLSearchParams(window.location.search);

    if (sessionStorage.getItem("tab") === null) {
        sessionStorage.tab = "[]";
    }

    if (u.get("dest") !== null) {
        if (u.get("ptitdej") === "on") {
            var dej = "oui";
        } else {
            var dej = "non";
        }

        var tab = JSON.parse(sessionStorage.tab);

        var reservation = {
            dest : u.get("dest"),
            arrivee : u.get("arrivee"),
            depart : u.get("depart"),
            parents : u.get("parents"),
            enfants : u.get("enfants"),
            ptitdej : dej,
            prix : u.get("prix"),
            image : `${u.get("dest")}_principale`,
            id : tab.length
        }
        
        tab.push(reservation);
        sessionStorage.tab = JSON.stringify(tab);

        window.history.pushState("", "", "panier.html");
        
    }
}

// Fonction affichant une page présentant le panier
// entree : aucune 
// sortie : page avec toute les infos sur la réservation

function affichage_panier() {
    var template = document.getElementById("template_reservation");
    const tab = JSON.parse(sessionStorage.getItem("tab"));
    for (const e of tab) {
        let clone = document.importNode(template.content, true);
        new_content = clone.firstElementChild.innerHTML
            .replace(/{{dest}}/g, e.dest)
            .replace(/{{image}}/g, e.image)
            .replace(/{{arrivee}}/g, e.arrivee)
            .replace(/{{depart}}/g, e.depart)
            .replace(/{{parents}}/g, e.parents)
            .replace(/{{enfants}}/g, e.enfants)
            .replace(/{{ptitdej}}/g, e.ptitdej)
            .replace(/{{prix}}/g, e.prix)
            .replace(/{{id}}/g, e.id);
        clone.firstElementChild.innerHTML = new_content;
        document.body.appendChild(clone);
    }
}



// Fonction permettant de supprimer une destination
// entree : destination (tableau)
// sortie : efface la reservation (page vide)

function supprimer_dest(reservation) {
    var tab = JSON.parse(sessionStorage.getItem("tab"));
    const id = reservation.getAttribute("id");
    tab.splice(id);
    sessionStorage.tab = JSON.stringify(tab);

    reservation.parentElement.parentElement.remove();
}


// Fonction permettant d'envoyer sur la page de payement
// entree : le tableau stocker
// sortie : envoie sur la page de commande avec le montant à payer

function payement() {
    var tab = JSON.parse(sessionStorage.getItem("tab"));
    var montant = 0;
    for (var e of tab) {
        montant += Number(e.prix);
    }
    window.location.href = `commande.html?prix=${montant}`;
}