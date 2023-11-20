import ville, depart, parents, enfants, ptitdej from "reservation.js"

class reservation {
    constructor(ville, arrivée, départ, prix, ptitdej){
        this._ville = ville
        this._arrivée = arrivée
        this._départ = départ
        this._prix = prix
        this._ptitdej = ptitdej
    }
}

var tab_reservation = [];

function ajout_reservation() {
    let res = reservation(ville, );
    tab_reservation = tab_reservation.push(res);
}

