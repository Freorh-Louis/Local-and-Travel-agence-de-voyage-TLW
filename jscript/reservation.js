
var tableau = {brehat : ["Ile-de-Bréhat","../images/brehat_principale.jpg","../images/brehat_1.jpg","../images/brehat_2.jpg","../images/brehat_3.jpg",30], 
etretat : ["Etretat","../images/etretat_principale.jpg","../images/etretat_1.jpg","../images/etretat_2.jpg","../images/etretat_3.jpg",30],
veules : ["Veules-les-roses", "../images/veules_principale.jpg","../images/veules_1.jpg","../images/veules_2.jpg","../images/veules_3.jpg",25],
zalipie : ["Zalipie","../images/zalipie_principale.jpg","../images/zalipie_1.jpg","../images/zalipie_2.jpg","../images/zalipie_3.jpg",30],
trujilo : ["Trujilo","../images/trujilo_principale.jpg","../images/trujilo_1.jpg","../images/trujilo_2.jpg","../images/trujilo_3.jpg",35],
loguivy : ["Loguivy de la mer","../images/loguivy_principale.jpg","../images/loguivy_1.jpg","../images/loguivy_2.jpg","../images/loguivy_monument.jpg",15],
morella : ["Morella","../images/morella_principale.jpg","../images/morella_1.jpg","../images/morella_2.jpg","../images/morella_3.jpg",40],
bled : ["Bled", "../images/bled_principale.jpg","../images/bled_1.jpg","../images/bled_2.jpg","../images/bled_3.jpg",40]};



function updateDest() {
    u = new URLSearchParams(window.location.search);
    ville = u.get("dest");
    let nom = tableau[ville][0]; 
    document.getElementById("myp").textContent += " " + nom;

    var L = [];
    for (var i = 0; i < 4; i++){
        let image = document.createElement("img")
        L.push(image);
        L[i].src = tableau[ville][i + 1];
        document.getElementById("img_grid").appendChild(L[i]);
    }
}



function prix() {
    let prix_jour = tableau[ville][5];
    let arrivee = new Date(document.getElementById("arrivee").value);
    let depart = new Date(document.getElementById("depart").value);
    let nbr_jour = (depart.getTime() - arrivee.getTime()) / (1000*3600*24);
    let parents = document.getElementById("parents").value;
    let enfants = document.getElementById("enfants").value;
    let ptitdej = document.getElementById("ptitdej").checked;
    let prix = nbr_jour*parents*prix_jour + 0.4*nbr_jour*enfants*prix_jour + nbr_jour*(Number(parents) + Number(enfants))*15*ptitdej;
    document.getElementById("prix").textContent = "Le prix de votre réservation est de " + prix + "€";
}



