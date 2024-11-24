import { inject, Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { from, Observable } from 'rxjs';
import { response } from 'express';
import { user } from './module/user';

const firebaseConfig = {
  apiKey: "AIzaSyDDHJXWJMQYj3uglg9z6u0BtdVphbFwUM0",
  authDomain: "emiapp-3e51a.firebaseapp.com",
  projectId: "emiapp-3e51a",
  storageBucket: "emiapp-3e51a.appspot.com",
  messagingSenderId: "635672603454",
  appId: "1:635672603454:web:30a534b5c40c8778335a6f",
  measurementId: "G-FBYKNHJEC9"
};
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //initialization
  private app = initializeApp(firebaseConfig);
  firebaseAuth=inject(Auth)
  constructor( private router: Router,) {
    console.log('Firebase initialized');
  }
  
  register(email:string,username:string,password:string):Observable<void>{
    const promise= createUserWithEmailAndPassword(this.firebaseAuth,email,password).
    then(response=>updateProfile(response.user,{displayName:username}))
    return from(promise)
  }
  
  

  

  
}
