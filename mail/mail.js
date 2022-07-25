const userMail = prompt("Inserisci la tua Email")

var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
var string = '';


const mailArray = ['mario.rossi@gmail.com']

// riempimento array
for(let i=0; i<10; i++){

    // generatore random di email
    for(var ii=0; ii<10; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    const arrayElement = (string + '@gmail.com');
    mailArray.push(arrayElement)
    string = ''
}

console.log(mailArray)

// controllo se la mail inserita dal prompt è presente nella lista
let login = false
for(let i=0; i<mailArray.length; i++){
    const email = mailArray[i]
    
    if(email === userMail){
        login = true
    }
}

if(login == true){
    console.log('la mail inserita è corretta')
}
else{
    console.log('Accesso negato, l`email non esiste')
}
