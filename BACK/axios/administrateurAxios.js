
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  APPRENANTS                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
montrerApprenant();

// AFFICHAGE APPRENANT
function montrerApprenant()
{
    //container liste apprenant
    let apprenantContainerListe = document.querySelector("#idApprenantListe");

    axios.get(`${url}/apprenant`)
        .then(function (response) {
            console.log("adminAXIOS - montrerApprenant()", response);
            response.data.forEach(element =>
            {
                //container element apprenant
                let apprenantElementContainer = document.createElement("div");
                apprenantElementContainer.setAttribute("id",`divApp${element.idAp}`);
                apprenantContainerListe.appendChild(apprenantElementContainer);
                
                //btnModifier
                let apprenantBtnModifier = document.createElement("button");
                apprenantBtnModifier.setAttribute("id",`btnAppMod${element.idAp}`);
                apprenantBtnModifier.setAttribute("onclick",`modifierApprenant(${element.idAp})`);
                apprenantBtnModifier.textContent = `MODIFIER`;
                apprenantElementContainer.appendChild(apprenantBtnModifier);

                //btnSupprimer
                let apprenantBtnSupprimer = document.createElement("button");
                apprenantBtnSupprimer.setAttribute("id",`btnAppSup${element.idAp}`);
                apprenantBtnSupprimer.setAttribute("onclick",`supprimerApprenant(${element.idAp})`);
                apprenantBtnSupprimer.textContent = `SUPPRIMER`;
                apprenantElementContainer.appendChild(apprenantBtnSupprimer);

                //txt
                let apprenantElementInfo = document.createElement("span");
                apprenantElementInfo.setAttribute("id",`spanApp${element.idAp}`);
                apprenantElementInfo.textContent = `APPRENANT n° ${element.idAp} _ ${element.nom} ${element.prenom} ${element.pseudo}`;
                apprenantElementContainer.appendChild(apprenantElementInfo);
            });
        })
        .catch(function (error)
        {
            console.log("adminAXIOS - montrerApprenant()",error);
        });
}

// CREATION APPRENANT
function creerApprenant()
{
    console.log("adminAXIOS creerApprenant()");

    //recuperation des inputs apprenants
    let apprenantContainer = document.querySelector("#idApprenantInput")
    let apprenantInputs = apprenantContainer.querySelectorAll("input");
    
    // Convert apprenantInputs NodeList to an array
    let apprenantInputsArray = Array.from(apprenantInputs);

        //verifier que tout les champs sont bien remplis
    
        if(apprenantInputsArray.every(estRemplis) === true)
        {
            let nouveauApprenant = new Apprenant(apprenantInputsArray[0].value, apprenantInputsArray[1].value, apprenantInputsArray[2].value, apprenantInputsArray[3].value,apprenantInputsArray[4].value,apprenantInputsArray[5].value,apprenantInputsArray[6].value);

            axios.post(`${url}/apprenant` , nouveauApprenant)
            .then(function (response) {
                console.log("AXIOS creerApprenant", response);
                document.location.reload();
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
        else
        {
            console.log("adminAXIOS creerApprenant() \n !!! tout les input ne sont pas remplis !!! ")
        }

}

// SUPPRIMER APPRENANT
function supprimerApprenant(pIdAp )
{
    console.log('adminAXIOS - supprimerApprenant()');
    axios.delete(`${url}/apprenant`,{data: { idAp: pIdAp }})
    .then(function (response) {
        console.log("adminAXIOS - supprimerApprenant() - GG t'as supprimer l'apprenant", response);
        document.location.reload();
    })
    .catch(function (error)
        {
            console.log("adminAXIOS - supprimerApprenant()",error);
        });
}

// MODIFIER APPRENANT
function modifierApprenant(pIdAp)
{
    let btnModifierApprenant = document.querySelector(`#btnAppMod${pIdAp}`).disabled = true;

    //container pour modifier element
    let apprenantElementModifier = document.createElement("div");
    apprenantElementModifier.setAttribute("class", `clsModif`);
    apprenantElementModifier.setAttribute("id", `divAppModifier${pIdAp}`);
    document.querySelector(`#divApp${pIdAp}`).appendChild(apprenantElementModifier);

    //inputs
    let apprenantInputs = document.querySelector("#idApprenantInput").querySelectorAll("input");

    // Convert enseignantInputs NodeList to an array
    let apprenantInputsArray = Array.from(apprenantInputs);

    axios.get(`${url}/apprenant/${pIdAp}`)
        .then(function (response) {
            console.log("adminAXIOS - modifierApprenant()", response);
            let apprenantObjet = response.data[0];
            let apprenantInformations = [apprenantObjet.nom, apprenantObjet.prenom,apprenantObjet.pseudo, apprenantObjet.mail, apprenantObjet.mdp,apprenantObjet.age, apprenantObjet.genre];

            //création d'input et remplissage avec les bonne valeur
            for (let i = 0; i < apprenantInputsArray.length; i++) {
                let nouveauInput = document.createElement("input");
                nouveauInput.setAttribute("placeholder", `${apprenantInputsArray[i].placeholder}`);
                nouveauInput.value = `${apprenantInformations[i]}`;
                apprenantElementModifier.appendChild(nouveauInput);
            }

            //Boutton validation modification
            let apprenantBtnModifier = document.createElement("button");
            apprenantBtnModifier.setAttribute("onclick", `validerModApprenant(${pIdAp})`)
            apprenantBtnModifier.innerHTML = "MODIFICATION TERMINEE";
            apprenantElementModifier.appendChild(apprenantBtnModifier);
        })
        .catch(function (error) {
            console.log("adminAXIOS - modifierApprenant()", error);
        });

    

}

function validerModApprenant(pIdAp)
{
    let apprenantInputs = document.querySelector(`#divAppModifier${pIdAp}`).querySelectorAll("input");

    let apprenantModifier = new Apprenant(apprenantInputs[0].value, apprenantInputs[1].value, apprenantInputs[2].value, apprenantInputs[3].value,apprenantInputs[4].value,apprenantInputs[5].value,apprenantInputs[6].value);
    apprenantModifier.idAp = pIdAp;
    axios.put(`${url}/apprenant`, apprenantModifier)
        .then(function (response) {
            console.log("adminAXIOS validerModApprenant", response);
            document.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

}

//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //
//                                  ENSIGNANTS                                  //
//  .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   //

montrerEnseignant();

//AFFICHAGE ENSIGNANT
function montrerEnseignant()
{
    //container liste enseignant
    let enseignantContainerListe = document.querySelector("#idEnseignantListe");

    axios.get(`${url}/enseignant`)
        .then(function (response) {
            console.log("adminAXIOS - montrerEnseignant()", response);
            response.data.forEach(element =>
            {
                //container element enseignant
                let enseignantElementContainer = document.createElement("div");
                enseignantElementContainer.setAttribute("id",`divEns${element.idEns}`);
                enseignantContainerListe.appendChild(enseignantElementContainer);
                
                //btnModifier
                let enseignantBtnModifier = document.createElement("button");
                enseignantBtnModifier.setAttribute("id",`btnEnsMod${element.idEns}`);
                enseignantBtnModifier.setAttribute("onclick",`modifierEnseignant(${element.idEns})`);
                enseignantBtnModifier.textContent = `MODIFIER`;
                enseignantElementContainer.appendChild(enseignantBtnModifier);

                //btnSupprimer
                let enseignantBtnSupprimer = document.createElement("button");
                enseignantBtnSupprimer.setAttribute("id",`btnEnsSup${element.idEns}`);
                enseignantBtnSupprimer.setAttribute("onclick",`supprimerEnseignant(${element.idEns})`);
                enseignantBtnSupprimer.textContent = `SUPPRIMER`;
                enseignantElementContainer.appendChild(enseignantBtnSupprimer);

                //txt
                let enseignantElementInfo = document.createElement("span");
                enseignantElementInfo.setAttribute("id",`spanEns${element.idEns}`);
                enseignantElementInfo.textContent = `ENSEIGNANTS n° ${element.idEns} _ ${element.nom} ${element.prenom} ${element.pseudo}`;
                enseignantElementContainer.appendChild(enseignantElementInfo);
            });
        })
        .catch(function (error)
        {
            console.log("adminAXIOS - montrerEnseignant()",error);
        });
}

// CREATION ENSEIGNANT
function creerEnseignant()
{
    console.log("adminAXIOS creerEnseignant()");

    //recuperation des inputs enseignants
    let enseignantContainer = document.querySelector("#idEnseignantInput")
    let enseignantInputs = enseignantContainer.querySelectorAll("input");
    
    // Convert enseignantInputs NodeList to an array
    let enseignantInputsArray = Array.from(enseignantInputs);

        //verifier que tout les champs sont bien remplis
        if(enseignantInputsArray.every(estRemplis) === true)
        {
            let nouveauEnseignant = new Enseignant(enseignantInputsArray[0].value, enseignantInputsArray[1].value, enseignantInputsArray[2].value, enseignantInputsArray[3].value,enseignantInputsArray[4].value);
            
            axios.post(`${url}/enseignant` , nouveauEnseignant)
            .then(function (response) {
                console.log("adminAXIOS creerEnseignant", response);
                document.location.reload();
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
        else
        {
            console.log("adminAXIOS creerEnseignant() \n !!! tout les input ne sont pas remplis !!! ")
        }

}

// SUPPRIMER ENSEIGNANT
function supprimerEnseignant(pIdEns)
{
    console.log('adminAXIOS - supprimerEnseignant()');
    axios.delete(`${url}/enseignant/${pIdEns}`)
    .then(function (response) {
        console.log("adminAXIOS - supprimerEnseignant() - GG t'as supprimer l'enseignant",pIdEns, response);
        document.location.reload();
    })
    .catch(function (error)
        {
            console.log("adminAXIOS - supprimerEnseignant()", error);
        });
}

// MODIFIER ENSEIGNANT
function modifierEnseignant(pIdEns)
{
    let btnModifierEnseignant = document.querySelector(`#btnEnsMod${pIdEns}`).disabled = true;

    //container pour modifier element
    let enseignantElementModifier = document.createElement("div");
    enseignantElementModifier.setAttribute("class", `clsModif`);
    enseignantElementModifier.setAttribute("id", `divEnsModifier${pIdEns}`);
    document.querySelector(`#divEns${pIdEns}`).appendChild(enseignantElementModifier);

    //inputs
    let enseignantInputs = document.querySelector("#idEnseignantInput").querySelectorAll("input");

    // Convert enseignantInputs NodeList to an array
    let enseignantInputsArray = Array.from(enseignantInputs);

    axios.get(`${url}/enseignant/${pIdEns}`)
        .then(function (response) {
            console.log("adminAXIOS - modifierEnseignant()", response);
            let enseignantObjet = response.data[0];
            let enseignantInformations = [enseignantObjet.nom, enseignantObjet.prenom,enseignantObjet.pseudo, enseignantObjet.mail, enseignantObjet.mdp];

            //création d'input et remplissage avec les bonne valeur
            for (let i = 0; i < enseignantInputsArray.length; i++) {
                let nouveauInput = document.createElement("input");
                nouveauInput.setAttribute("placeholder", `${enseignantInputsArray[i].placeholder}`);
                nouveauInput.value = `${enseignantInformations[i]}`;
                enseignantElementModifier.appendChild(nouveauInput);
            }

            //Boutton validation modification
            let enseignantBtnModifier = document.createElement("button");
            enseignantBtnModifier.setAttribute("onclick", `validerModEnseignant(${pIdEns})`)
            enseignantBtnModifier.innerHTML = "MODIFICATION TERMINEE";
            enseignantElementModifier.appendChild(enseignantBtnModifier);
        })
        .catch(function (error) {
            console.log("adminAXIOS - modifierEnseignant()", error);
        });
}

function validerModEnseignant(pIdEns)
{
    let enseignantInputs = document.querySelector(`#divEnsModifier${pIdEns}`).querySelectorAll("input");

    let enseignantModifier = new Enseignant(enseignantInputs[0].value, enseignantInputs[1].value, enseignantInputs[2].value, enseignantInputs[3].value,enseignantInputs[4].value);
    enseignantModifier.idEns = pIdEns;
    axios.put(`${url}/enseignant`, enseignantModifier)
        .then(function (response) {
            console.log("adminAXIOS validerModAEnseignant", response);
            document.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

}
