

function pickLeaner(inputAr, n){
    let arrayLeaner = []
    for(let i= 0; i<n ; i++){
        let students = Math.floor(Math.random()*inputAr.length);
        arrayLeaner.push(inputAr [students]);

    }
    console.log(arrayLeaner);
}


let tab =["Alexis", "Alice", "Cassidy","Hanen", "Jeremy"]
let b = Math.floor(Math.random()*tab.length);
pickLeaner(tab,b);