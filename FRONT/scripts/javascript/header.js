
let header = document.createElement("header");

let path = window.location.pathname;
let currentPage = path.split("/").pop();

if (currentPage == "connexionInscription.html" || currentPage == "Enseignantcompte.html" || currentPage == "administrateur.html") {
          header.innerHTML =
          `<nav >
          <p><a href="./visiteur.html">Accueil</a></p>
          <p><a href="#" style ='font-style : italic;' onclick="alert('Vous etes deja sur cette page')">S'inscrire / Se connecter</a></p>
          </nav>
          <img class="animate__animated animate__bounce" src="../../assets/images/ImgVisiteur/logo.svg" alt="">`;
}
else if (currentPage == "visiteur.html") {
          header.innerHTML =
          `<nav >
          <p><a href="#">Accueil</a></p>
          <p><a href="./connexionInscription.html">S'inscrire / Se connecter</a></p>
          </nav>
          <img class="animate__animated animate__bounce" src="../../assets/images/ImgVisiteur/logo.svg" alt="">`;
}
else
{
          header.innerHTML =
          `<nav >
          <p><a href="./visiteur.html">Accueil</a></p>
          <p><a href="./connexionInscription.html">S'inscrire / Se connecter</a></p>
          </nav>
          <img class="animate__animated animate__bounce" src="../../assets/images/ImgVisiteur/logo.svg" alt="">`;
}
document.body.querySelector("main").prepend(header);