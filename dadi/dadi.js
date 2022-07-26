 document.querySelector('input[type="submit"').addEventListener("click",function(){
    // GENERO I DUE DADI
	var num1 = Math.round(Math.random()*5+1);
	var num2 = Math.round(Math.random()*5+1);
	
    // STAMPO IL RISULTATO DEI DADI
	document.getElementById("numero1").innerHTML = "Hai ottenuto: " + num1;
	document.getElementById("numero2").innerHTML = "L`avversario ha ottenuto: " + num2;
	
	// STAMPO L'ESITO DELLA PARTITA CONFRONTANDO I RISULTATI 
	if(num1 > num2){
        document.getElementById("esito").innerHTML = "Hai vinto!";
    }
	else if (num1 < num2){
        document.getElementById("esito").innerHTML = "Hai perso :(";
    }
    else{
        document.getElementById("esito").innerHTML = "Pareggio";
    }
});