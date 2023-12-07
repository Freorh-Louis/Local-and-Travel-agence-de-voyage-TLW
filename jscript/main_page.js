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


let template = document.querySelector("#ListeInfo");


//fonction permettant de remplacer les éléments dans le template pour chaque destinations.
async function remplacer_elements(){
    
    let reponse = await fetch('..//tab.json');
    let tabjson = await reponse.json();
    
    let template = document.querySelector("#ListeInfo");

    for (const d of tabjson.tableau_main_page) {
        let clone = document.importNode(template.content, true);
        
        newContent = clone.firstElementChild.innerHTML
            .replace(/{{lien}}/g, d.lien)
            .replace(/{{image}}/g, d.image)
            .replace(/{{nom}}/g, d.nom)
            .replace(/{{dest}}/g, d.dest);
        clone.firstElementChild.innerHTML = newContent;
    
        document.querySelector("#matrice").appendChild(clone);

        console.log(d)
    } 
}  
  