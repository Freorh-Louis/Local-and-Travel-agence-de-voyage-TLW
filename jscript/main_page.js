//fichier JavaScript pour la page principale
//Louis Vincent - Hugo Prigent



//classe info, permettant d'attribuer le nom de la ville "ville"(str), la destination "dest"(lien), et le lien de la photo "lien"
class Info_dest {
    constructor(ville, dest, lien) {
        this._ville = ville;
        this._dest = dest;
        this._lien = lien;
    }

}



function Input(v1, v2, v3) {
    filtre_prix_disp.value = v1;
    filtre_parisiens.value = v2;
    filtre_animaux.value = v3;
    remplacer_elements()
}

async function est_affichable(ville){
    
    let reponse = await fetch('..//tab.json');
    let tabjson = await reponse.json();


    var valide = false;
    
    // Recuperation des entrées du filtres:
    var s_filtre_animaux = document.getElementById("filtre_animaux").checked;
    var s_filtre_parisiens = document.getElementById("filtre_parisiens").checked;
    var s_filtre_prix = document.getElementById("filtre_prix").value;
    
    
    // Conditions pour afficher une destination
     
    c2 = tabjson.tableau_reservation[ville][7] == s_filtre_parisiens; 
    c3 = tabjson.tableau_reservation[ville][6] == s_filtre_animaux;
    c1 = tabjson.tableau_reservation[ville][5] <= s_filtre_prix;

    // Correspondance ou non avec le filtre
    if ( c1 && c2 && c3){
        valide = true;
    }
    
    return valide;
}



//fonction permettant de remplacer les éléments dans le template pour chaque destinations.
async function remplacer_elements() {

    let reponse = await fetch('..//tab.json');
    let tabjson = await reponse.json();
    let template = document.querySelector("#ListeInfo");

    
    
    //Boucle permettant d'afficher les destinations en fcontion du filtre
    document.querySelector("#matrice").innerHTML = "";
    
    for (const d of tabjson.tableau_main_page) {
        
        
        if (await est_affichable(d.dest)){
            
        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{lien}}/g, d.lien)
            .replace(/{{image}}/g, d.image)
            .replace(/{{nom}}/g, d.nom)
            .replace(/{{dest}}/g, d.dest);
        clone.firstElementChild.innerHTML = newContent;

        document.querySelector("#matrice").appendChild(clone);
        }

    }
}

function elements_() {

    fetch('..//tab.json').then(r=>r.json()).then(tabjson=>{
        let template = document.querySelector("#ListeInfo");

    
    
        //Boucle permettant d'afficher les destinations en fcontion du filtre
        document.querySelector("#matrice").innerHTML = "";
        
        for (const d of tabjson.tableau_main_page) {
             
            let clone = document.importNode(template.content, true);
    
            newContent = clone.firstElementChild.innerHTML
                .replace(/{{lien}}/g, d.lien)
                .replace(/{{image}}/g, d.image)
                .replace(/{{nom}}/g, d.nom)
                .replace(/{{dest}}/g, d.dest);
            clone.firstElementChild.innerHTML = newContent;
    
            document.querySelector("#matrice").appendChild(clone);
            
    
        }
    });
    
}
