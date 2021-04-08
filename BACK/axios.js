let url = 'http://localhost:3000'; // A DETERMINER

montrerApprenant();
//  .   .   .   .   .  //
// AFFICHAGE APPRENANT //
//  .   .   .   .   .  //
function montrerApprenant()
{
    //titre liste
    let apprenantTitreListe = document.createElement("h2");
    apprenantTitreListe.setAttribute("id","idApprenantListeTitre");
    apprenantTitreListe.innerHTML = "LISTE DES APPRENNANT";
    document.body.appendChild(apprenantTitreListe);

    //container liste apprenant
    let apprenantContainerListe = document.createElement("div");
    apprenantContainerListe.setAttribute("id","idApprenantListe");
    document.body.appendChild(apprenantContainerListe);

    //container pour créer un compte apprenant
    creerApprenantContainer(apprenantContainerListe)

    axios.get(`${url}/apprenant`)
        .then(function (response) {
            console.log("AXIOS - montrerApprenant()", response);
            response.data.forEach(element =>
            {
                //container element apprenant
                let apprenantElementContainer = document.createElement("div");
                apprenantElementContainer.setAttribute("id",`div${element.idAp}`);
                apprenantContainerListe.appendChild(apprenantElementContainer);

                //txt
                let apprenantElementInfo = document.createElement("li");
                apprenantElementInfo.setAttribute("id",`${element.idAp}`);
                apprenantElementInfo.textContent = `Apprenant : ${element.nom} ${element.prenom} ${element.pseudo}`;
                apprenantElementContainer.appendChild(apprenantElementInfo);

                //btnModifier
                let apprenantBtnModifier = document.createElement("button");
                apprenantBtnModifier.setAttribute("id",`btnMod${element.idAp}`);
                apprenantBtnModifier.textContent = `MODIFIER`;
                apprenantElementContainer.appendChild(apprenantBtnModifier);

                //btnSupprimer
                let apprenantBtnSupprimer = document.createElement("button");
                apprenantBtnSupprimer.setAttribute("id",`btnSup${element.idAp}`);
                apprenantBtnSupprimer.setAttribute("onclick",`supprimerApprenant(${element.idAp})`);
                apprenantBtnSupprimer.textContent = `SUPPRIMER`;
                apprenantElementContainer.appendChild(apprenantBtnSupprimer);
            });
        })
        .catch(function (error)
        {
            console.log("AXIOS - montrerApprenant()",error);
        });
}

//SECTION CREATION APPRENANT DOM
function creerApprenantContainer(apprenantContainerListe)
{
    //container creation apprenant
    let apprenantCreationContainer = document.createElement("div");
    apprenantContainerListe.appendChild(apprenantCreationContainer);

    //creation des label et input
    let apprenantInformation = ["nom", "prenom", "pseudo", "mail","mdp","age","genre"];
    for (let i=0;i<apprenantInformation.length; i++)
    {   
        let apprenantLabelInputContainer = document.createElement("div");
        apprenantContainerListe.appendChild(apprenantLabelInputContainer); 

        let apprenantLabel = document.createElement("label");
        apprenantLabel.innerHTML = `${apprenantInformation[i]} : `;
        apprenantLabelInputContainer.appendChild(apprenantLabel);    

        let apprenantInput = document.createElement("input");
        apprenantInput.setAttribute("id",`idInput${apprenantInformation[i]}`);
        apprenantInput.setAttribute("placeholder",`${apprenantInformation[i]}`);
        apprenantLabelInputContainer.appendChild(apprenantInput);
    }

    //btnCreate
    let apprenantBtnCreation = document.createElement("button");
    apprenantBtnCreation.textContent = `CREER COMPTE APPRENANT`;
    apprenantBtnCreation.setAttribute("onclick", "creerApprenant()");
    apprenantContainerListe.appendChild(apprenantBtnCreation);
}

//  .   .   .   .   . //
// CREATION APPRENANT //
//  .   .   .   .   . //
function creerApprenant()
{
    console.log("AXIOS creerApprenant()");

    //recuperation des inputs apprenants
    let apprenantContainer = document.querySelector("#idApprenantListe")
    let apprenantInputs = apprenantContainer.querySelectorAll("input");
    
    // Convert apprenantInputs NodeList to an array
    let apprenantInputsArray = Array.from(apprenantInputs);

        //verifier que tout les champs sont bien remplis
        const estRemplis = (elem) => elem.value!="";
        if(apprenantInputsArray.every(estRemplis) === true)
        {
            let nouveauApprenant = new Apprenant(apprenantInputs[0].value, apprenantInputs[1].value, apprenantInputs[2].value, apprenantInputs[3].value,apprenantInputs[4].value,apprenantInputs[5].value,apprenantInputs[6].value);
            
            axios.post(`${url}/apprenant` , nouveauApprenant)
            .then(function (response) {
                console.log("AXIOS creerApprenant", response);
            })
            .catch(function (error)
            {
                console.log(error);
            });
        }
        else
        {
            console.log("AXIOS creerApprenant() \n !!! tout les input ne sont pas remplis !!! ")
        }

}
//  .   .   .   .   .  //
// SUPPRIMER APPRENANT //
//  .   .   .   .   .  //

function supprimerApprenant(pIdAp )
{
    console.log('AXIOS - supprimerApprenant()');
    axios.delete(`${url}/apprenant`,{data: { idAp: pIdAp }})
    .then(function (response) {
        console.log("AXIOS - supprimerApprenant() - GG t'as supprimer l'apprenant", response);
        document.location.reload();
    })
    .catch(function (error)
        {
            console.log("AXIOS - supprimerApprenant()",error);
        });
}
