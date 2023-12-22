// fichier JavaScript pour la page principale
// Louis Vincent - Hugo Prigent
// 21/12/2023
// To do:


//classe info, permettant d'attribuer le nom de la ville "ville"(str), 
//la destination "dest"(lien), et le lien de la photo "lien"

class Info_dest {
    constructor(ville, dest, lien) {
        this._ville = ville;
        this._dest = dest;
        this._lien = lien;
    }

}

// Fonction input, récupère la valeur d'une entrée sur le filtre
// entree : v1,v2,v3 (valeur des entrées du filtre)
// sortie : filtrage de la page
function Input(v1, v2, v3) {
    filtre_prix_disp.value = v1;
    filtre_parisiens.value = v2;
    filtre_animaux.value = v3;
    filtrer_elements()
}


// Fonction determinant si une destination est affichable en fonction de filtre
// entree : ville (la destination)
// sortie : booleen donnant la validité d'une ville ou non 

async function est_affichable(ville){
    
    let reponse = await fetch('../tab.json');
    let tabjson = await reponse.json();


    var valide = false;
    
    // Recuperation des entrées du filtres:
    s_filtre_animaux = document.getElementById("filtre_animaux").checked;
    s_filtre_parisiens = document.getElementById("filtre_parisiens").checked;
    s_filtre_prix = document.getElementById("filtre_prix").value;
    
     
    // Conditions pour afficher une destination 
    c2 = tabjson.tableau_reservation[ville][7] === s_filtre_parisiens; 
    c3 = tabjson.tableau_reservation[ville][6] === s_filtre_animaux;
    c1 = tabjson.tableau_reservation[ville][5] <= s_filtre_prix;

    // Correspondance ou non avec le filtre
    if ( c1 && c2 && c3 ){
        valide = true;
    }
    
    return valide;
}



// fonction permettant de remplacer les éléments dans le template pour chaque destinations 
// en focntion du filtre.
// entree : aucune
// sortie : affichage de la page filtree

async function filtrer_elements() {

    let reponse = await fetch('../tab.json');
    let tabjson = await reponse.json();
    let template = document.querySelector("#ListeInfo");

    
    
    //Boucle permettant d'afficher les destinations en fcontion du filtre
    document.querySelector("#matrice").innerHTML = "";
    
    for (const d of tabjson.tableau_main_page) {
        console.log(d.dest)
        
        if (await est_affichable(d.dest)){
            
        let clone = document.importNode(template.content, true);
        const response_weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${d.dest}&appid=282109da4d041c390ef73b146fe01605&units=metric&lang=fr`);
        const json_weather = await response_weather.json();
        
        newContent = clone.firstElementChild.innerHTML
            .replace(/{{lien}}/g, d.lien)
            .replace(/{{image}}/g, d.image)
            .replace(/{{nom}}/g, d.nom)
            .replace(/{{dest}}/g, tabjson.tableau_reservation[d.dest][0])
            .replace(/{{meteo}}/g, json_weather.weather[0].description)
            .replace(/{{temp}}/g, json_weather.main.temp);
        clone.firstElementChild.innerHTML = newContent;

        document.querySelector("#matrice").appendChild(clone);
        }

    }
}

// Fonction permettant d'afficher la page sans aucun filtre
// entree : aucune
// sortie : page avec toutes les destinations sans aucun filtre

async function elements_() {

        let reponse = await fetch('../tab.json');
        let tabjson = await reponse.json();
        let template = document.querySelector("#ListeInfo");

    
    
        //Boucle permettant d'afficher les destinations en fonction du filtre
        document.querySelector("#matrice").innerHTML = "";
        
        for (const d of tabjson.tableau_main_page) {
             
            let clone = document.importNode(template.content, true);
            const response_weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${d.dest}&appid=282109da4d041c390ef73b146fe01605&units=metric&lang=fr`);
            const json_weather = await response_weather.json();
            
            newContent = clone.firstElementChild.innerHTML
                .replace(/{{lien}}/g, d.lien)
                .replace(/{{image}}/g, d.image)
                .replace(/{{nom}}/g, d.nom)
                .replace(/{{dest}}/g, d.dest)
                .replace(/{{meteo}}/g, json_weather.weather[0].description)
                .replace(/{{temp}}/g, json_weather.main.temp);
            clone.firstElementChild.innerHTML = newContent;
    
            document.querySelector("#matrice").appendChild(clone);
            
    
        }
    }
    

