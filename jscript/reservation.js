var tableau = {brehat : ["Ile-de-Bréhat","../images/brehat_principale.jpg",30], 
etretat : ["Etretat","../images/etretat_principale.jpg",30],
veules : ["Veules-les-roses", "../images/veules_principale.jpg",25],
zalipie : ["Zalipie","../images/zalipie_principale.jpg",30],
trujilo : ["Trujilo","../images/trujilo_principale.jpg",35],
loguivy : ["Loguivy de la mer","../images/loguivy_principale.jpg",15],
morella : ["Morella","../images/morella_principale.jpg",40],
bled : ["Bled", "../images/bled_principale.jpg",40]};







function updateDest() {
    u = new URLSearchParams(window.location.search);
    ville = u.get("dest");
    let nom = tableau[ville][0]; 
    let img_principale = tableau[ville][1];
    document.getElementById("myp").textContent += " " + nom;

    let image = document.createElement("img");
    image.src = img_principale;
    document.body.appendChild(image);
    
}





function prix() {
    let prix_jour = tableau[ville][2];
    let arrivee = new Date(document.getElementById("arrivee").value);
    let depart = new Date(document.getElementById("depart").value);
    let nbr_jour = (depart.getTime() - arrivee.getTime()) / (1000*3600*24);
    let parents = document.getElementById("parents").value;
    let enfants = document.getElementById("enfants").value;
    let ptitdej = document.getElementById("ptitdej").checked;
    let prix = nbr_jour*parents*prix_jour + 0.4*nbr_jour*enfants*prix_jour + nbr_jour*(Number(parents) + Number(enfants))*15*ptitdej;
    document.getElementById("prix").textContent = "Le prix de votre réservation est de " + prix + "€";
}



