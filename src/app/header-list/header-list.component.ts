import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { HeaderModel } from '../models/header-model';
import { NbreConnectesService } from '../nbre-connectes.service';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

HeaderArray!: HeaderModel[];
nbreConnectes!:number;
userName!:string;

ngOnInit(){
  this.HeaderArray=[
    {
      icon:"../assets/header-icons/documentation.png",
      notif_nbr:90,
      title:"Documentation"
    },

    {
      icon:"../assets/header-icons/action.png",
      notif_nbr:90,
      title:"Action"
    },

    {
      icon:"../assets/header-icons/changements.png",
      notif_nbr:90,
      title:"Changement"
    },

    {
      icon:"../assets/header-icons/audit.png",
      notif_nbr:90,
      title:"Audit"
    },

    {
      icon:"../assets/header-icons/risquer.png",
      notif_nbr:90,
      title:"Risque"
    },

    {
      icon:"../assets/header-icons/indicateur.png",
      notif_nbr:90,
      title:"Indicateur"
    },

    {
      icon:"../assets/header-icons/PNC.png",
      notif_nbr:90,
      title:"Non conformités"
    },

    {
      icon:"../assets/header-icons/fichier.png",
      notif_nbr:90,
      title:"Réclamations"
    },

    {
      icon:"../assets/header-icons/livraison-rapide.png",
      notif_nbr:90,
      title:"Fournisseurs"
    },

    {
      icon:"../assets/header-icons/reunion.png",
      notif_nbr:90,
      title:"Réunions"
    },

    {
      icon:"../assets/header-icons/equipe.png",
      notif_nbr:90,
      title:"Equipement"
    },

    {
      icon:"../assets/header-icons/profil-de-lutilisateur.png",
      notif_nbr:90,
      title:"RH"
    },

    {
      icon:"../assets/header-icons/loi.png",
      notif_nbr:90,
      title:"Réglementation"
    },

    {
      icon:"../assets/header-icons/environnement.png",
      notif_nbr:90,
      title:"Environnement"
    },

    {
      icon:"../assets/header-icons/securite.png",
      notif_nbr:90,
      title:"Sécurité"
    },

    {
      icon:"../assets/header-icons/aliments.png",
      notif_nbr:90,
      title:"Incident Alimentaire"
    },

    {
      icon:"../assets/header-icons/cartable.png",
      notif_nbr:90,
      title:"SDA"
    },

    {
      icon:"../assets/header-icons/money-management.png",
      notif_nbr:90,
      title:"COQ"
    },

    {
      icon:"../assets/header-icons/modeles-predictifs.png",
      notif_nbr:90,
      title:"AMDEC"
    },

    {
      icon:"../assets/header-icons/ajouter-au-panier.png",
      notif_nbr:90,
      title:"Achats"
    }
  ];
}


constructor(private nbreConnectesService:NbreConnectesService,private userNameService:UserNameService){
  this.nbreConnectes=nbreConnectesService.nbreConnectes;
  this.userName=userNameService.prenom +" "+ userNameService.nom;
}

@ViewChild('headerList', { static: false }) headerList!: ElementRef;

  scrollLeft() {
    this.headerList.nativeElement.scrollLeft -= 200; // Adjust scroll amount as needed
  }

  scrollRight() {
    this.headerList.nativeElement.scrollLeft += 200; // Adjust scroll amount as needed
  }

}

