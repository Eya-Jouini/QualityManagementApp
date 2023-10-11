import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameService {
  nom!:string;
  prenom!:string;

  constructor() {
    this.nom="Jouini";
    this.prenom="Eya";
   }
}
