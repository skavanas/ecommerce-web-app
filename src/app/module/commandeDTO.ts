import { commande } from "./commande";

export class commandeDTO{
    constructor(private commande:commande){}
    id=this.commande.id
    date=this.commande.datecommand
    details=this.commande.details

}