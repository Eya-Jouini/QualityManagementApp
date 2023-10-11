import { Injectable } from '@angular/core';
import { Indicator } from './models/Indicator';

@Injectable({
  providedIn: 'root'
})
export class MesuresIndicateursCamembertService {

  constructor() { }
  getIndicatorsMeasures(): Indicator[] {
    const data: Indicator[] =    
    [
      {
        number : 1,
        name : "TAUX D'ACTIONS PAR TYPE",
        mesuresCamembert :
          [
            {
              nom :"ACTION CORRECTIVE",
              valeur:19.1,
            },
            {
              nom :"ACTION CURATIVE",
              valeur:1.9,
            },
            {
              nom :"CONSTAT ACTE",
              valeur:20,
            },
            {
              nom :"AUTRE",
              valeur:17.3,
            },
            {
              nom :"ACTION PREVENTIVE",
              valeur:3.3,
            },
            {
              nom :"CHANGE CONTROL",
              valeur:10,
            },
            {
              nom :"PROJET",
              valeur:10,
            },
            {
              nom :"TACHE",
              valeur:15.8,
            },
            {
              nom :"CONCEPTION",
              valeur:4.2,
            },
            {
              nom :"DEROGATION",
              valeur:20,
            }
          ]
      },
      {
        number : 2,
        name : "TAUX D'AUDITS REALISES PAR TYPE",
        mesuresCamembert :
          [
            {
              nom :"TYPE_1",
              valeur:30.5,
            },
            {
              nom :"TYPE_2",
              valeur:25.7,
            },
            {
              nom :"TYPE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 3,
        name : "TAUX DE CHARGES PAR AUDITEURS",
        mesuresCamembert :
          [
            {
              nom :"AUDITEURS1",
              valeur:30.5,
            },
            {
              nom :"AUDIRTEURS2",
              valeur:25.7,
            },
            {
              nom :"AUDITEURS3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 4,
        name : "TAUx D'ECART MOYEN PAR CHAMP",
        mesuresCamembert :
          [
            {
              nom :"CHAMP_1",
              valeur:30.5,
            },
            {
              nom :"CHAMP_2",
              valeur:25.7,
            },
            {
              nom :"CHAMP_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 5,
        name : "TAUX DE RISQUES OPPORTUNITE PAR DOMAINE",
        mesuresCamembert :
          [
            {
              nom :"DOMAINE_1",
              valeur:30.5,
            },
            {
              nom :"DOMAINE_2",
              valeur:25.7,
            },
            {
              nom :"DOMAINE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 6,
        name : "TAUX DE NON CONFORMITES PAR SOURCE",
        mesuresCamembert :
          [
            {
              nom :"SOURCE_1",
              valeur:30.5,
            },
            {
              nom :"SOURCE_2",
              valeur:25.7,
            },
            {
              nom :"SOURCE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 7,
        name : "TAUX DE NON CONFORMITES PAR TYPE",
        mesuresCamembert :
          [
            {
              nom :"TYPE_1",
              valeur:30.5,
            },
            {
              nom :"TYPE_2",
              valeur:25.7,
            },
            {
              nom :"TYPE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 8,
        name : "POURCENTAGE DES COUTS DES NON CONFORMITES PAR SOURCE",
        mesuresCamembert :
          [
            {
              nom :"SOURCE_1",
              valeur:30.5,
            },
            {
              nom :"SOURCE_2",
              valeur:25.7,
            },
            {
              nom :"SOURCE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 9,
        name : "POURCENTAGE DES COUTS DES NON CONFORMITES PAR TYPE ",
        mesuresCamembert :
          [
            {
              nom :"TYPE_1",
              valeur:30.5,
            },
            {
              nom :"TYPE_2",
              valeur:25.7,
            },
            {
              nom :"TYPE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 10,
        name : "TAUX DE RECLAMATIONS CLIENT PAR TYPE",
        mesuresCamembert :
          [
            {
              nom :"TYPE_1",
              valeur:30.5,
            },
            {
              nom :"TYPE_2",
              valeur:25.7,
            },
            {
              nom :"TYPE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 11,
        name : "TAUX DE DECISIONS PAR TYPE",
        mesuresCamembert :
          [
            {
              nom :"TYPE_1",
              valeur:30.5,
            },
            {
              nom :"TYPE_2",
              valeur:25.7,
            },
            {
              nom :"TYPE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 12,
        name : "TAUX DE PERSONNES PAR QUALIFICATION",
        mesuresCamembert :
          [
            {
              nom :"QUALIFICATION_1",
              valeur:30.5,
            },
            {
              nom :"QUALIFICATION_2",
              valeur:25.7,
            },
            {
              nom :"QUALIFICATION_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 13,
        name : "TAUX D'INCIDENTS PAR ANCIENNETE",
        mesuresCamembert :
          [
            {
              nom :"ANCIENNETE_1",
              valeur:30.5,
            },
            {
              nom :"ANCIENNETE_2",
              valeur:25.7,
            },
            {
              nom :"ANCIENNETE_3",
              valeur:43.8,
            }
          ]
      },
      {
        number : 14,
        name : "TAUX DE VISITES PAR UNITE",
        mesuresCamembert :
          [
            {
              nom :"UNITE_1",
              valeur:30.5,
            },
            {
              nom :"UNITE_2",
              valeur:25.7,
            },
            {
              nom :"UNITE_3",
              valeur:43.8,
            }
          ]
      }

    ];

    return data;

  }  
}
