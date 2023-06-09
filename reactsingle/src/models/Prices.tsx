export default class Prices {
    id?: number;
    prix: string;
    titre: string;

    constructor (
        id: number, 
        prix: string,
        titre: string,
        ) {
        this.id = id;
        this.prix = prix;
        this.titre = titre;
    }
}