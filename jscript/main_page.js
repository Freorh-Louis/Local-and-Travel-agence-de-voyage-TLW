//fichier JavaScript pour la page principale
//Louis Vincent - Hugo Prigent



//classe info, permettant d'attribuer le nom de la ville "ville"(str), la destination "dest"(lien), et le lien de la photo "lien"
class Info_dest{
    constructor(ville, dest, lien){
        this._ville = ville;
        this._dest = dest; 
        this._lien = lien;
    }

}

//déclaration des objet (qui sont les destinations) à travers Info_dest
var bled = new Info_dest("Bled, slovénie",'reservation.html?dest=bled',"../images/bled_principale.jpg");
var brehat = new Info_dest("Ile-de-Bréhat, Bretagne",'reservation.html?dest=brehat',"../images/brehat_principale.jpg");
var etretat = new Info_dest("Etretat, France",'reservation.html?dest=etretat',"../images/etretat_principale.jpg");
var veules = new Info_dest("Veules les roses, France",'reservation.html?dest=veules',"../images/veules_principale.jpg");
var zalipie = new Info_dest("Zalipie, Pologne",'reservation.html?dest=zalipie',"../images/zalipie_principale.jpg");
var trujilo = new Info_dest("Trujilo, Espagne",'reservation.html?dest=trujilo',"../images/trujilo_principale.jpg");
var loguivy = new Info_dest("Loguivy de la mer, Bretagne",'reservation.html?dest=loguivy',"../images/loguivy_principale.jpg");
var morella = new Info_dest("Morella, Espagne",'reservation.html?dest=morella',"../images/morella_principale.jpg");



let liste_dest = [bled,brehat,etretat,veules,zalipie,trujilo,loguivy,morella];
let template = document.querySelector("#ListeInfo");


//boucle permettant de remplacer les éléments dans le template pour chaque destinations.

for (const d of liste_dest) {
    let clone = document.importNode(template.content, true);
    
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{nom}}/g, d._ville)
        .replace(/{{lien}}/g, d._lien)
        .replace(/{{dest}}/g, d._dest)
    clone.firstElementChild.innerHTML = newContent;

    document.querySelector("#matrice").appendChild(clone);

}   