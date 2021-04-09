class Apprenant {
    
    idAp
    nom
    prenom
    pseudo
    mail
    mdp
    score
    tauxUtiliser
    age
    genre
    progression

    constructor(nom,prenom,pseudo,mail,mdp,score,tauxUtiliser,age,genre,progression){
        this.idAp= null
        this.nom = nom
        this.prenom = prenom
        this.pseudo = pseudo
        this.mail = mail
        this.mdp = mdp
        this.score = score
        this.tauxUtiliser = tauxUtiliser
        this.age = age
        this.genre = genre
        this.progression = progression
    }
}

module.exports = Apprenant


