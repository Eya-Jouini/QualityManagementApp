import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'documentations', loadChildren: () => import('./modules/documentations/documentations.module').then(m => m.DocumentationsModule) },
  { path: 'action', loadChildren: () => import('./modules/action/action.module').then(m => m.ActionModule) },
  { path: 'changement', loadChildren: () => import('./modules/changement/changement.module').then(m => m.ChangementModule) },
  { path: 'audit', loadChildren: () => import('./modules/audit/audit.module').then(m => m.AuditModule) },
  { path: 'risque', loadChildren: () => import('./modules/risque/risque.module').then(m => m.RisqueModule) },
  { path: 'indicateur', loadChildren: () => import('./modules/indicateur/indicateur.module').then(m => m.IndicateurModule) },
  { path: 'non-conformites', loadChildren: () => import('./modules/non-conformites/non-conformites.module').then(m => m.NonConformitesModule) },
  { path: 'reclamations', loadChildren: () => import('./modules/reclamations/reclamations.module').then(m => m.ReclamationsModule) },
  { path: 'fournisseurs', loadChildren: () => import('./modules/fournisseurs/fournisseurs.module').then(m => m.FournisseursModule) },
  { path: 'reunions', loadChildren: () => import('./modules/reunions/reunions.module').then(m => m.ReunionsModule) },
  { path: 'equipement', loadChildren: () => import('./modules/equipement/equipement.module').then(m => m.EquipementModule) },
  { path: 'RH', loadChildren: () => import('./modules/rh/rh.module').then(m => m.RHModule) },
  { path: 'reglementation', loadChildren: () => import('./modules/reglementation/reglementation.module').then(m => m.ReglementationModule) },
  { path: 'environnement', loadChildren: () => import('./modules/environnement/environnement.module').then(m => m.EnvironnementModule) },
  { path: 'securite', loadChildren: () => import('./modules/securite/securite.module').then(m => m.SecuriteModule) },
  { path: 'incident-alimentaire', loadChildren: () => import('./modules/incident-alimentaire/incident-alimentaire.module').then(m => m.IncidentAlimentaireModule) },
  { path: 'SDA', loadChildren: () => import('./modules/sda/sda.module').then(m => m.SDAModule) },
  { path: 'COQ', loadChildren: () => import('./modules/coq/coq.module').then(m => m.COQModule) },
  { path: 'AMDEC', loadChildren: () => import('./modules/amdec/amdec.module').then(m => m.AMDECModule) },
  { path: 'achats', loadChildren: () => import('./modules/achats/achats.module').then(m => m.AchatsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
