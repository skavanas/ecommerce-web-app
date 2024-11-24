import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, getDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { product } from './module/product';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  
  constructor(private firestore: Firestore) {}

  // Méthode pour ajouter une nouvelle commande
  confirmeOrder(cartProducts: product[]): void {
    if (cartProducts.length === 0) {
      console.log('Cart is empty.');
      return;
    }

    // Extract necessary data
    const userId = "user-id";  // Replace with actual user ID logic if needed
    const details = cartProducts.map(product => ({
      name: product.name,
      prix: product.prix,
      quantite: product.quantite
    }));

    // Calculate the total amount
    const montant = cartProducts.reduce((total, product) => total + (product.prix * product.quantite), 0);

    // Create the order object
    const commande = {
      userId: userId,
      montant: montant,
      dateCommande: new Date(),
      details: details
    };

    // Save the order in Firestore
    const commandesCollection = collection(this.firestore, 'commandes');
    addDoc(commandesCollection, commande)
      .then(() => console.log("Order saved successfully!"))
      .catch(error => console.log("Error saving order:", error));
  }
  
  getAllOrders(){
    const collectionInstance = collection(this.firestore,'orders')

   return  collectionData(collectionInstance, {idField : 'id'})
  }

  getOrderId(id:string){
    const collectionInstance = collection(this.firestore,'orders')

    const docinstance = doc(this.firestore,'orders',id)

    return getDoc(docinstance)


  }

  updateOrder(id:string){
    const docinstance = doc(this.firestore,'products',id)
    const updatedOrder : any= {name : "updated name", montant : 1000}
    updateDoc(docinstance,updatedOrder)
    .then(()=>console.log(`Order with ${id} updated successfully ! `))
    .catch(error=>console.log(error))
  }

  deleteOrder(id:string){
    const docinstance = doc(this.firestore,'orders',id)
    deleteDoc(docinstance)
    .then(()=>console.log('data deleted !'))
    .catch(error=>console.log(error))
  }

  
}
