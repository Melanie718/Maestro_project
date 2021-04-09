let url = 'http://localhost:3007'; // A DETERMINER

function creerUtilisateur(event) {
    //event.preventDefault();
    console.log('coucou')
    //recuperation des inputs apprenants
    let formContainer = document.querySelector("#formInscription")
    let inscriptionInputs = formContainer.querySelectorAll("input");

    // Convert apprenantInputs NodeList to an array
    let formInscriptionInputsArray = Array.from(inscriptionInputs);

    //verifier que tout les champs sont bien remplis


    const estRemplis = (elem) => elem.value != "";
    if (formInscriptionInputsArray.every(estRemplis) === true) {
        let nom = document.getElementById('idInscriptionNom').value
        let prenom = document.getElementById('idInscriptionPrenom').value
        let pseudo = document.getElementById('idInscriptionPseudo').value
        let email = document.getElementById('idInscriptionMail').value
        let mdp = document.getElementById('idInscriptionMdp').value
        let type = document.getElementById('idInscriptionRole').value
        console.log(nom, prenom, pseudo, email, mdp, type)


        axios.post(`${url}/creerutilisateur`, { nom, prenom, pseudo, email, mdp, type } /* On entre les inputs et on les rentre dans l'equivalent du body */)
        .then(function (response) {
            console.log("REPONSE",response.data.type)
            if (response.data.type === 'Apprenti') {
                window.location.href="telecharement.html";
                console.log(user);
            } else if (response.data.type === 'Enseignant') {
                window.location.href="Enseignantcompte.html";
                console.log("enseignant" + user);
            }
            // location.href='./comptecree.html'
        }).catch(function (error) {
            console.log(error);
        })
    } else {
        window.alert("Veuillez remplir tous les champs!");
    }

}