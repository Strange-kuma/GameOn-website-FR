// const recuperer le formulaire et l'emplacement des erreur
const formulaire = document.getElementById('loginform');

formulaire.addEventListener("submit", function (e) {

    // Const récupérer les champs du formulaire
    const firstName = document.getElementById("first");
    const lastName = document.getElementById("last");
    const email = document.getElementById("email");
    const birthdate = document.getElementById("birthdate");
    const quantity = document.getElementById("quantity");
    const locationTournament = document.getElementsByName("location");
    const condition = document.getElementById("checkbox1");
    // initialisation de la variable erreur
    var error;
    // Création des RegEx
    const regExText = /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // variable injection regex 
    let nametest = regExText.test(lastName.value);
    let prenomtest = regExText.test(firstName.value);
    let emailtest = emailRegex.test(email.value);
    // trouver l'anner actuel
    var ddj = new Date();
    var anneeDuJour = ddj.getFullYear();
    // variable de selection de lanner de naissance 
    var getanneDeNaissance = new Date(birthdate.value);
    var annedeNaissance = getanneDeNaissance.getFullYear();
    // variable qui calcule l'age de lutilisateur
    var ageUtilisateur = anneeDuJour - annedeNaissance;
    // fonction de validation de formulaire
    function validatefirstName() {
        if (firstName.value || prenomtest) {
            firstName.style.border = "#279e7a 2px solid"
            return true
        } else {
            return error()
        }
    }
    function validatelastName() {
        if (lastName.value || prenomtest) {
            lastName.style.border = "#279e7a 2px solid"
            return true
        } else {
            return error()
        }
    }
    function validateemail() {
        if (email.value || emailtest) {
            email.style.border = "#279e7a 2px solid";
            return true
        } else {
            return error()
        }
    }
    function validatebirthday() {
        if (ageUtilisateur > 18 && birthdate.value) {
            birthdate.style.border = "#279e7a 2px solid";
            return true
        } else {
            return error()
        }
    }
    function validatequantity() {
        if (quantity.value) {
            quantity.style.border = "#279e7a 2px solid"
            return true
        } else {
            return error()
        }
    }
    function validateislocationselected() {
        var locationName = "";
        for (let i = 0; i < locationTournament.length; i++) {
            if (locationTournament[i].checked == true) {
                console.log(locationTournament[i].value);
                locationName = locationTournament.value
                break
            }
        }

        if (locationName != "") {
           
            return true
        } else {
            return error()
        }

    }
    function validatecondition(){
        if (condition.checked == true) {
            return true
        } else {
            
            return error();
        }
    }
    //fonction d'erreur de formulaire
    function error() {
        if (!firstName.value || !prenomtest) {
            error = "*Le prenom n'est pas valide";
            firstName.style.border = "red 2px solid"
            return false
        }
        if (!lastName.value || !nametest) {
            error = "*Le nom n'est pas valide";
            lastName.style.border = "red 2px solid"
            return false
        }
        if (!email.value || !emailtest) {
            error = "*L'email n'est pas valide";
            email.style.border = "red 2px solid";
            return false
        }

        if (!birthdate.value || ageUtilisateur < 18) {
            error = "*La date de naissance est invalide vous devez avoir +18 ans pour participer";
            birthdate.style.border = "red 2px solid"
            return false
        }
        if (!quantity.value) {
            error = "*La quantiter n'est pas valide";
            quantity.style.border = "red 2px solid"
            return false
        }
        if (locationTournament.value == "") {
            error = "*Pas de ville selectionner";
            return false
        }
        if (condition.checked == false) {
            error = "*Vous devez accepter les conditions pour participer !";
            return false
        }
    }
    if (validatefirstName() == true &&
        validatelastName() == true &&
        validateemail() == true &&
        validatebirthday() == true &&
        validatequantity() == true &&
        validateislocationselected() == true &&
        validatecondition()== true) {

        alert('formulaire envoyer')

    } else {
        // preventDefault() empeche le chargement de la page en cas d'erreur
        e.preventDefault();
        // on ecrit dans la balise le texte inscrit dans la variable error
        document.getElementById('errormsg').innerHTML = error;
        return false
    }
})

// var fruits = ["banane", "kiwi", "pomme", "goyave", "mangue"]
// for (let n = 0; n < fruits.length; n++) {
//     console.log(fruits[n])
//     if (fruits[n] == "pomme") {
//         break
//     }
// }
