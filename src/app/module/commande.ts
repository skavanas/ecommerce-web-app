import { DetailComponent } from "../detail/detail.component"

export class commande{
    id ! : string
    userId !: string
    datecommand!:Date
    details:DetailComponent[]=[]
}