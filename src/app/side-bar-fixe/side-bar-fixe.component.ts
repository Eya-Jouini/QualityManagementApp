import { Component, Output, Input , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-bar-fixe',
  templateUrl: './side-bar-fixe.component.html',
  styleUrls: ['./side-bar-fixe.component.scss']
})
export class SideBarFixeComponent {
  @Output() toggleSidebar: EventEmitter<void> = new EventEmitter<void>();
  @Input() expandButton! :boolean;
items=[
  {icon :'./assets/header-icons/documentation.png',infoBulle :"Consulter documents internes"},

  {icon :'./assets/header-icons/changements.png',infoBulle :"Ajouter une demande de changement"},

  {icon :'./assets/header-icons/audit.png',infoBulle :"Ajouter audit"},

  {icon :'./assets/header-icons/PNC.png',infoBulle :"Ajouter PNC"},

  {icon :'./assets/header-icons/bulle.png',infoBulle :"Ajouter réclamation client"},

  {icon :'./assets/header-icons/livraison-rapide.png',infoBulle :"Ajouter réclamation fournisseur"},

  {icon :'./assets/header-icons/reunion.png',infoBulle :"Ajouter réunion"},

  {icon :'./assets/header-icons/profil-de-lutilisateur.png',infoBulle :"Ajouter formation"},

  {icon :'./assets/header-icons/cartable.png',infoBulle :"Ajouter visite sécurité"},

];

onToggleSidebar() {
  this.toggleSidebar.emit();//the toggleSidebar is an event
}

}
