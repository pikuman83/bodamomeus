import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  invitado1 = '';
  invitado2 = '';

  setinvitado(name: string){
    console.log('settingName', name)
    return this.invitado1 = name;
  }
  getinvitado(){
    console.log('getting name', this.invitado1)
    return this.invitado1
  }

  constructor() { }

  firebaseApp = initializeApp(environment.firebase);
  db= getFirestore();
  async create(path: string, data: any){
    try {
      await addDoc(collection(this.db, path), data);
    } catch (e: any) {
      console.error(e)
    }
  }

}
