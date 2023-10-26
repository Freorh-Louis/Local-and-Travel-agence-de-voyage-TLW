var tableau = {brehat : ["Ile-de-Bréhat","../images/brehat_principale.jpg"], 
etretat : ["Etretat","../images/etretat_principale.jpg"],
veules : ["Veules-les-roses", "../images/veules_principale.jpg"],
zalipie : ["Zalipie","../images/zalipie_principale.jpg"],
trujilo : ["Trujilo","../images/trujilo_principale.jpg"],
loguivy : ["Loguivy de la mer","../images/loguivy_principale.jpg"],
morella : ["Morella","../images/morella_principale.jpg"],
bled : ["Bled", "../images/bled_principale.jpg"]};







function updateDest() {
    let u = new URLSearchParams(window.location.search);
    let ville = u.get("dest");
    let nom = tableau[ville][0] ; 
    let img_principale = tableau[ville][1]
    document.getElementById("myp").textContent += " " + nom;

    let image = document.createElement("img");
    image.src = img_principale;
    document.body.appendChild(image);
    
}





