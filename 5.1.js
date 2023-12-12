
function asktvSerie(){
    let tvSerie = {
        // cle: valeur ;
        Title : prompt( "quelle est votre serie"),
        Years : parseFloat(prompt("donne moi l'année de production")),
        addActors :[]
    }
    let acteurs = prompt("Quels sont les acteurs");
    while ( acteurs!== ''){
       tvSerie.addActors.push(acteurs);
        acteurs = prompt("Quels sont les acteurs");
    }
    console.log(tvSerie.Years)
    return tvSerie;
}

console.log(asktvSerie());

