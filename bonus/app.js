const numElementi = parseInt( prompt('Inserisci il numero di elementi dell`array'))
const numEstrazioni = parseInt( prompt('Inserisci il numero di elementi da estrarre partendo dalla fine'))
const myArray = []

if ((Number.isInteger(numElementi)) && (Number.isInteger(numEstrazioni)) ){

    if (numEstrazioni >= numElementi){
        alert('ATTENZIONE! Non puoi estrarre un numero di elementi maggiore del numero totale')
    }
    else{
        // RIEMPIO L'ARRAY DI NUMENRI
        for(i=0; i<numElementi; i++){
        
        const arrayElement = Math.round(Math.random()*100);
    
        myArray.push(arrayElement)
        }
    }
    // STAMPO GLI ELEMENTI DELL'ARRAY
    console.log(myArray)
    
    // STAMPO GLI ELEMENTI PARTENDO DALLA FINE DELL'ARRAY
    for(i=(numElementi-1); i>=numEstrazioni; i-- ){
        console.log(myArray[i])
    }
}

else{
    alert('ATTENZIONE! Puoi inserire solo numeri interi')
}
