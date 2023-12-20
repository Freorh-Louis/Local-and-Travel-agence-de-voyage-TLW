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


let template = document.querySelector("#ListeInfo");


//fonction permettant de remplacer les éléments dans le template pour chaque destinations.
async function remplacer_elements() {

    let reponse = await fetch('..//tab.json');
    let tabjson = await reponse.json();
    let template = document.querySelector("#ListeInfo");

    // recuperation des entrées du filtres:
    var s_filtre_animaux = document.getElementById("filtre_animaux").checked;
    var s_filtre_parisiens = document.getElementById("filtre_parisiens").checked;
    var s_filtre_ptitdej = document.getElementById("filtre_ptitdej").checked;
    var s_filtre_prix = document.getElementById("filtre_prix").value;
    
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

