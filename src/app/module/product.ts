export class product{
    name!:String;
    prix!:number;
    img!:String;
    quantite!:number;

    constructor(name: string, img: string, prix: number, quantite: number) {
        this.name = name;
        this.img = img;
        this.prix = prix;
        this.quantite = quantite;
      }
}