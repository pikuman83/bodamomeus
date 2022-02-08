import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { doc, getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore";
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  invitado1 =  new Subject<string>();
  invitado2 =  new Subject<string>();

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

  async get(){
    return await getDocs(collection(this.db, "bodaMomeus"));
  }

}
