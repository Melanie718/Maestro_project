let footer = document.createElement("footer");

footer.innerHTML = ` <div class="contenu-footer" >
    
<div class="bloc footer-contacts">
    <h3>Restons en contacts</h3>
    <p>05.62.85.47.35.</p>
    <p>maestro-appli@contact.com</p>
    <p>8 rue de l'invention, 31400 Toulouse</p>
</div>

<div class="bloc footer-services">
    <h3>Nos services</h3>
    <ul class="services">
        <li>Mentions légales</li><br>
        <li>Conditions Générales d'Utilisations</li><br>
        <li>CCG</li><br>
        <li>Aide</li><br>
    </ul>
</div>
<div class="bloc footer-medias">
    <h3>Nos réseaux</h3>

    <p class="liste-media">
        <a href="https://www.ludimension.com/" target="blanke">
            <img class="image fa"  src="../../assets/images/footer/vignettes/fb2.png" alt="facebook">
        </a>
        <a href="https://www.ludimension.com/" target="blanke">
            <img class="image in"  src="../../assets/images/footer/vignettes/instagram2.png" alt="instagram">
        </a>
        <a href="https://twitter.com/ludimension?lang=fr" target="blanke">
            <img class="image tw" src="../../assets/images/footer/vignettes/twitter 2.png" alt="twitter">
        </a>
        <a href="https://www.youtube.com/watch?v=M7OZV80kl-s" target="blanke">
            <img class="image yo"  src="../../assets/images/footer/vignettes/youtube2.png" alt="youtube">
        </a>
    </p>
    <br>

</div>

</div>
<ul class="app">
<li><a href="./telecharement.html" target="blanke">
    <img class="vignette" src="../../assets/images/footer/vignettes/badge-app-store.png" alt="store">
</a></li>
<li><a href="./telecharement.html" target="blanke" target="blanke">
    <img class="vignette" src="../../assets/images/footer/vignettes/GooglePlay2-FR.png" alt="play">
</a></li>
</ul>`;
document.body.appendChild(footer);