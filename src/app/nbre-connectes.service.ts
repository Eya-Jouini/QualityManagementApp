import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class NbreConnectesService {

  nbreConnectes!: number;

  constructor() {
    this.nbreConnectes = Math.floor(Math.random() * 50); 
  }
}