import { Injectable } from '@angular/core';
import { Indicator } from './models/Indicator';
import { Measure } from './models/measure';

@Injectable({
  providedIn: 'root'
})
export class MesuresIndicateursService {

  constructor() { }

  getIndicatorsMeasures(): Indicator[] {
    const data: Indicator[] =    [
      {
        number:1,
        name:"TAUX DE POLYVALENCE",
        measures:
          [
            {date:"2023-07-01",value: 10},
            {date:"2023-07-02",value: 2.4},
            {date:"2023-07-12",value: 6.33},
            {date:"2023-07-21",value: 8.5},
            {date:"2023-08-02",value: 8},
            {date:"2023-09-01",value: 11},
            {date:"2023-09-25",value: 11.5},
          ]
      },

      {
        number:2,
        name:"NOMBRE D'ACTIONS DE FORMATION ",
        measures:
        [
          {date:"2023-07-01",value: 3},
          {date:"2023-07-01",value: 2.9},
          {date:"2023-07-01",value: 34},
          {date:"2023-07-01",value: 62},
          {date:"2023-07-01",value: 50},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 11.9},
        ]
      },

      {
        number:3,
        name:"NOMBRE DE PERSONNES FORMEES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 11},
          {date:"2023-07-01",value: 14},
          {date:"2023-07-01",value: 23},
          {date:"2023-07-01",value: 49.4},
          {date:"2023-07-01",value: 39.9},
          {date:"2023-07-01",value: 23},
        ]
      },

      {
        number:4,
        name:"TAUX D'EFFICACITE DES ACTIONS DE FORMATION",
        measures:
        [
          {date:"2023-07-01",value: 12},
          {date:"2023-07-01",value: 23},
          {date:"2023-07-01",value: 5.98},
          {date:"2023-07-01",value: 23},
          {date:"2023-07-01",value: 44.5},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 15},
        ]
      },

      {
        number:5,
        name:"TAUX DE FORMATIONS REALISEES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:6,
        name:"TAUX D'HABILITATION MOYEN DU PERSONNEL",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:7,
        name:"COUT DES FORMATIONS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:8,
        name:"TAUX DE PRESENCE AUX FORMATIONS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:9,
        name:"NOMBRE DE MODIFICATION DES DOCUMENTS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:10,
        name:"NOMBRE DE DOCUMENTS CREES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

   {
        number:11,
        name:"NOMBRE DE DOCUMENTS EN INSTANCE",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:12,
        name:"TAUX DE CONSULTATION DES DOCUMENTS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:13,
        name:"NOMBRE D'AUDITS PREVUS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:14,
        name:"TAUX DE REALISATION DU PROGRAMME D'AUDIT",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:15,
        name:"NOMBRE DES CONSTATS MOYEN/AUDIT",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:16,
        name:"TAUX DE REALISATION DE ACTIONS ISSUES DES AUDITS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:17,
        name:"TAUX DE REPORT DES AUDITS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:18,
        name:"Indicateur_18",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:19,
        name:"TAUX D'EFFICACITE MOYEN DES ACTIONS CLOTUREES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:20,
        name:"TAUX D'ACTIONS REALISEES DANS LES DELAIS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:21,
        name:"TAUX ACTIONS CLOTUREES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:22,
        name:"NOMBRE EQUIPEMENTS A VERIFIER",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:23,
        name:"NOMBRE EQUIPEMENTS NON E/V DANS LES DELAIS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:24,
        name:"NOMBRE DE NOUVEAUX FOURNISSEURS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:25,
        name:"NOMBRE DE FOURNISSEURS EVALUES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },
      {
        number:26,
        name:"EVALUATION MOYENNE DES FOURNISSEURS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:27,
        name:"NOMBRE DE RECLAMATION FOURNISSEURS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:28,
        name:"NOMBRE DE RECLAMATIONS FOURNISSEURES NON ENCORE CLOTUREES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:29,
        name:"NOMBRE D'INDICATEURS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:30,
        name:"TAUX D'INDICATEURS NON SUIVIS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:31,
        name:"TAUX D'INDICATEURS ATTEINTS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:32,
        name:"NOMBRE DE RECLAMATIONS CLIENTS ",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:33,
        name:"DELAI MOYEN DES TRAITEMENTS DES RECLAMATIONS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:34,
        name:"TAUX DE RECLAMATIONS TRAITEES DANS LES DELAIS PREVUS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:35,
        name:"NOMBRE DE SUGGESTIONS CLIENTS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:36,
        name:"NOMBRE DE NON CONFORMITES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:37,
        name:"DELAI MOYEN DE TRAITEMENT DES NON COFORMITES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:38,
        name:"TAUX DES NON CONFORMITES TRAITEES DANS LES DELAIS PREVUS",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },


      {
        number:39,
        name:"VALEURS DES NON CONFORMITES",
        measures:
          [
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
          ]
      },

      {
        number:40,
        name:"NOMBRE DE REUNIONS PREVUES",
        measures:
          [
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
          ]
      },

      {
        number:41,
        name:"NOMBRE MOYEN DES DECISIONS PAR REUNION",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:42,
        name:"NOMBRE DE REUNIONS REALISEES",
        measures:
        [
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
          {date:"2023-07-01",value: 10},
        ]
      },

      {
        number:43,
        name:"TAUX DE PRESENCE AUX REUNIONS",
        measures:
          [
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
          ]
      },

      {
        number:44,
        name:"NOMBRE D'ACTIONS ISSUES DES INDICATEURS",
        measures:
          [
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
            {date:"2023-07-01",value: 10},
          ]
      }
    ];
    return data;
  }


  calculerMoyenne(indicator:Indicator):number {
    let sum=0;
    indicator.measures?.forEach((measure:Measure)=>{sum+=measure.value});
    if (indicator) {
      return (sum / (indicator.measures?.length || 1))*100;
    } else {
      return 0;
    }
    }
    
  
}
