class Utilisateur
{
    constructor(nom,prenom,pseudo,email,mdp,type){
        this.nom=nom
        this.prenom=prenom
        this.pseudo = pseudo
        this.email = email
        this.mdp = mdp
        this.type = type
        this.id=null
    }
}

module.exports=Utilisateur;