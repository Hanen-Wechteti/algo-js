
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



function randomizeCast(tvSerie){
    let acteurHazard = []
    for (let i = 0; i < tvSerie.addActors.length; i++){
    
    
    let hasard = Math.floor(Math.random()*tvSerie.addActors.length);

    acteurHazard.push(tvSerie.addActors[hasard]);
}
tvSerie.addActors = acteurHazard;
}
randomizeCast(asktvSerie());

console.log(asktvSerie())