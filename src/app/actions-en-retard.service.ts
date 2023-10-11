import { Injectable } from '@angular/core';
import { Action } from './models/action';

@Injectable({
  providedIn: 'root'
})
export class ActionsEnRetardService {
data!: Action[];

constructor(){
      this.data=[
        {
           num_action:976,
            description:"Update work instruction WI2021",
            delais:"2022-12-01",
            taux:0.75
        },
        {
          num_action:975,
           description:"Revoir la qualification des sous-traitants et assurer une meilleure gestion des prestataires externes et un suivi efficace de leurs performances",
           delais:"2022-12-01",
           taux:0.0
        },
        {
          num_action:974,
           description:"Action de prévention apnyl",
           delais:"2022-12-01",
           taux:0.0
        },        
        {
          num_action:973,
          description:"COFIDUR XXX 2 qsf",
          delais:"2022-12-01",
          taux:0.50
        },
        {
          num_action:972,
          description:"Action de prévention 1",
          delais:"2022-12-01",
          taux:0.30
        },
        {
          num_action:971,
          description:"Préparer un BPLAn",
          delais:"2022-12-01",
          taux:0.0
        },
        {
          num_action:970,
          description:"Préparer un BPLAn",
          delais:"2022-12-01",
          taux:0.20
        },
        {
          num_action:400,
          description:"Revue du système qualité relatif au produit et au processus",
          delais:"2023-01-05",
          taux:0.0
        },
        {
          num_action:402,
          description:"FEEG",
          delais:"2023-01-05",
          taux:0.0
        }        
        
      ];
  }

  getActionsEnRetard(){
    return this.data;
  }
}
