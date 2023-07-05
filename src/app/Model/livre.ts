export class Livre {

    isbnlivre:number;
    titre:string;
    auteur:string;
    datePublication:Date;

    constructor(isbnlivre:number, titre:string, auteur:string, datePublication:Date) {
        this.isbnlivre = isbnlivre;
        this.titre = titre;
        this.auteur = auteur;
        this.datePublication = datePublication;
    }
}
