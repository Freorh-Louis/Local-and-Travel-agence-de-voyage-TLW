
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

        var reservation = {
            dest : u.get("dest"),
            arrivee : u.get("arrivee"),
            depart : u.get("depart"),
            parents : u.get("parents"),
            enfants : u.get("enfants"),
            ptitdej : dej,
            prix : u.get("prix"),
            image : `${u.get("dest")}_principale`
        }

        var tab = JSON.parse(sessionStorage.tab);
        tab.push(reservation);
        sessionStorage.tab = JSON.stringify(tab);
    }
}

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
            .replace(/{{prix}}/g, e.prix);
        clone.firstElementChild.innerHTML = new_content;
        document.body.appendChild(clone);
    }
}