class Admin {
    
    idAdm
    nom
    prenom
    pseudo
    mail
    mdp

    constructor(nom,prenom,pseudo,mail,mdp){
        this.idUti= null
        this.nom = nom
        this.prenom = prenom
        this.pseudo = pseudo
        this.mail = mail
        this.mdp = mdp
    }
}

module.exports = Admin


