export default class Cartes {
    id?: number;
    image: string;

    constructor (
        id: number, 
        image: string
        ) {
        this.id = id;
        this.image = image;
    }
}