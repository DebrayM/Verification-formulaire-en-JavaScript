// pour ne pas exécuter le code avant l'affichage de la fenêtre //

window.onload = function() {

    let sp = document.getElementById('pseudo');
    sp.addEventListener('change', verifPseudo);

    let zz = document.getElementById('email1');
    zz.addEventListener('change', verifEmail);

    let pw1 = document.getElementById('PassW');
    pw1.addEventListener('change', verifPassWord);

    let pw2 = document.getElementById('PassWc');
    pw2.addEventListener('change', verifPassWord);

    let image1 = document.getElementById('img1');
    image1.addEventListener('click', affichPassword1)

    let image2 = document.getElementById('img2');
    image2.addEventListener('click', affichPassword2)
}

var mess = "";

function affichPassword1() {
    let passw1 = document.getElementById('PassW');
    if (passw1.type === "password") {
        passw1.type ="text";
    }else{
        passw1.type ="password";
    }
}

function affichPassword2() {
    let passw2 = document.getElementById('PassWc');
    if (passw2.type === "password") {
        passw2.type ="text";
    }else{
        passw2.type ="password";
    }
}
// Expression régulière permettant la vérification syntaxique d'une adresse email
function checkEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function verifEmail() {
    console.log("email " + this.id + "  valeur  " + this.value);

    if (checkEmail(this.value)) {
        this.style.borderColor = "green";
        document.getElementById('errorp2').innerHTML = "";
    } else {
        mess = "L'email est incorrect";
        document.getElementById('errorp2').innerHTML = mess;
        // rouge
        this.style.borderColor = 'red';       
    }
}
function verifPseudo() {
    // tester le nombre de caractère du pseudonyme //
    if (this.value.length < 5) {
        //let error = document.createElement('p');
        //error.innerText = "votre pseudo doit avoir au moins 5 caractères (Chiffres ou lettres)";
        //document.getElementById('p1').append(error);

        mess = "votre pseudo doit comprendre au moins 5 caractères";
        document.getElementById('errorp1').innerHTML = mess;
        // rouge
        this.style.borderColor = 'red';
    } else {
        // vert 
        this.style.borderColor = "green";
        //error.remove();
        document.getElementById('errorp1').innerHTML = "";
        // texteContent = innerHTML //
    }
}

function verifPassWord() {
    switch(this.id) {
    case "PassW" :
        if (this.value.length < 6) {
            mess = "votre mot de passe doit comprendre au moins 8 caractères (Chiffres et lettres)";
            document.getElementById('errorp3').innerHTML = mess;
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = "green";
            document.getElementById('errorp3').innerHTML = "";
        }
        break;
    case "PassWc" :
        let pw1tempo = document.getElementById('PassW');
        if ((this.value.length >= 6) && (this.value === pw1tempo.value)) {
            this.style.borderColor = "green";
            document.getElementById('errorp4').innerHTML = "";
        } else {
            mess = "Le mot de passe de confirmation est incorrect.";
            document.getElementById('errorp4').innerHTML = mess;
            this.style.borderColor = 'red';
        }        
        break;
    }

}