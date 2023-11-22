
function test() {
    let u = new URLSearchParams(window.location.search);
    if (u.get("ptitdej") === "on") {
        var dej = "oui";
    } else {
        var dej = "non";
    }

    let res = {duree : `Du ${u.get("arrivee")} jusqu'au ${u.get("depart")}`,
    parents : `Adultes : ${u.get("parents")}`, enfants : `Enfants : ${u.get("enfants")}`, ptitdej : `dej`, prix : `u.get("prix")`}
    
    

    let reservation = document.createElement("div");
    let image = document.createElement("img");
    for (var i = 0; i < 5; i++) {
        let li = document.createElement("li");
        let txt = document.createElement("p");

    }

    document.getElementById("test").textContent = prix;
}
