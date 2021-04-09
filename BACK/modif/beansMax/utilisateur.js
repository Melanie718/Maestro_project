class Utilisateur {
    
    idUti
    nom
    prenom
    pseudo
    mail
    mdp
    type
    constructor(nom,prenom,pseudo,mail,mdp,type){
        this.idUti= null
        this.nom = nom
        this.prenom = prenom
        this.pseudo = pseudo
        this.mail = mail
        this.mdp = mdp
        this.type = type
    }
}

module.exports = Utilisateur


