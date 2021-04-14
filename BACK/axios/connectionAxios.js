function connectionEnseignant()
{
     console.log("connectionAXIOS - connectionEnseignant()");

     let pseudoConnectionValue = document.querySelector("#idConnexionMail").value;
     let mdpConnectionValue = document.querySelector("#idConnexionMdp").value;
     
     if (pseudoConnectionValue!="" && mdpConnectionValue!="")
     {
          axios.get(`${url}/enseignant/pseudo/${pseudoConnectionValue}/mdp/${mdpConnectionValue}`)
          .then(function (response)
          {
               console.log("connectionAXIOS - connectionEnseignant() -ENSEIGNANT", response);
              if(response.data!="")
              {
                   window.location.href="Enseignantcompte.html";
              }
              else
              {
                   connectionAdmin (pseudoConnectionValue,mdpConnectionValue);
              }
          })
          .catch(function (error)
          {
              console.log("connectionAXIOS - connectionEnseignant()",error);
          });
     }
     else
     {
          window.alert("Pour vous connecter, merci de remplis tout les champs requis");
     }
}

function connectionAdmin (pseudoConnectionValue,mdpConnectionValue)
{
     axios.get(`${url}/admin/pseudo/${pseudoConnectionValue}/mdp/${mdpConnectionValue}`)
     .then(function (response)
     {
          console.log("connectionAXIOS - connectionAdmin() -ADMINISTRATEUR", response);
         if(response.data!="")
         {
              window.location.href="administrateur.html";
         }
         else
         {
              window.alert("Identifiant ou mot de passe incorrect");
         }
     })
     .catch(function (error)
     {
         console.log("connectionAXIOS - connectionAdmin()",error);
     });
}